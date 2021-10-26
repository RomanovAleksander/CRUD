const {Router} = require('express');
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const router = Router();
const controller = require('../controllers/user.controller');

router.get('/', auth, role, controller.getUsers)

module.exports = router;