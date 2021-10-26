const {Router} = require('express');
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const router = Router();
const controller = require('../controllers/user.controller');

router.get('/', auth, role, controller.getUsers)

router.get('/:id', auth, role, controller.getUser)

router.post('/update', auth, role, controller.updateUser)

router.delete('/delete', auth, role, controller.deleteUser)

module.exports = router;