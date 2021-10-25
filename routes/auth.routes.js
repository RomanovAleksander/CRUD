const {Router} = require('express');
const {check} = require('express-validator');
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const router = Router();
const controller = require('../authController');

// /api/auth/register
router.post(
  '/register',
  [
    check('username', 'Incorrect email').notEmpty(),
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length 6 characters')
      .isLength({ min: 6 })
  ],
  controller.registration
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Enter a valid email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
  ],
  controller.login
)

router.get('/', auth, role, controller.getUsers)

router.get('/token', auth, controller.checkToken)

module.exports = router;
