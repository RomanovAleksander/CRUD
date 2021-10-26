const {Router} = require('express');
const {check} = require('express-validator');
const auth = require("../middleware/auth.middleware");
const router = Router();
const controller = require('../controllers/auth.controller');

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

router.get('/token', auth, controller.checkToken)

router.post('/generate', auth, controller.getNewToken)

module.exports = router;
