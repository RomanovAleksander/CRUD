const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const generateAccessToken = (id, isAdmin, username) => {
  return jwt.sign(
    { userId: id, isAdmin: isAdmin, username: username },
    config.get('jwtSecret'),
    { expiresIn: '730h' }
  );
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect registration data'
        })
      }

      const {email, password, username, isAdmin} = req.body;

      const candidateByEmail = await User.findOne({ email });
      const candidateByUsername = await User.findOne({ username });

      if (candidateByEmail || candidateByUsername) {
        return res.status(400).json({ message: 'This user already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword, username, isAdmin });

      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (e) {
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect registration data'
        })
      }

      const {email, password} = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'User is not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password, try again' });
      }

      const token = generateAccessToken(user._id, user.isAdmin, user.username);

      res.json({ token, userId: user.id, isAdmin: user.isAdmin });
    } catch (e) {
      res.status(400).json({ message: 'Login error' });
    }
  }

  async checkToken(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ message: 'No authorization' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));
    const user = await User.findOne({_id: decoded.userId});

    if (!user) {
      return res.status(401).json({ message: 'No authorization' })
    }

    res.json(decoded);
  } catch (e) {
    res.status(401).json({ message: 'No authorization' });
  }
  }
}

module.exports = new authController();
