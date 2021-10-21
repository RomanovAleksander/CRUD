const {Router} = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const Profile = require("../models/Profile");
const router = Router();

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некоректны email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
      .isLength({ min: 6 })
  ],
  async (req, res) => {
 try {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
     return res.status(400).json({
       errors: errors.array(),
       message: 'Некоректные данные при регистрации'
     })
   }

    const {email, password, username, isAdmin} = req.body;

    const candidateByEmail = await User.findOne({ email });
    const candidateByUsername = await User.findOne({ username });

    if (candidateByEmail || candidateByUsername) {
      return res.status(400).json({ message: 'Такой пользователь уже сущстует' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword, username, isAdmin });

    await user.save();

    res.status(201).json({ message: 'Пользователь создан' });
 } catch (e) {
   res.status(500).json({ message: 'Something went wrong, try one more time' });
 }
})

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Введите коректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некоректные данные при входе в систему'
        })
      }

      const {email, password} = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' });
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '730h' }
      );

      res.json({ token, userId: user.id, isAdmin: user.isAdmin });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time'});
    }
  })

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})

module.exports = router;
