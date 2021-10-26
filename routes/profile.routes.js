const {Router} = require('express');
const router = Router();
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/profile.controller');

router.post('/create', auth, controller.createProfile)

router.post('/update', auth, controller.updateProfile)

router.delete('/delete', auth, controller.deleteProfile)

router.get('/all', auth, controller.getProfiles)

router.get('/', auth, controller.getProfilesByUser)

router.get('/:id', auth, controller.getProfilesById)

module.exports = router;
