const {Router} = require('express');
const config = require('config')
const router = Router();
const auth = require('../middleware/auth.middleware');
const Profile = require('../models/Profile');

router.post('/create', auth, async (req, res) => {
  try {
    const {name, gender, birthdate, city} = req.body;

    const profile = new Profile({
      name, gender, birthdate, city, owner: req.user.userId
    })

    await profile.save();

    res.status(201).json({ message: 'Профиль создан' });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})


router.get('/', auth, async (req, res) => {
  try {
    const profiles = await Profile.find({ owner: req.user.userId });
    res.json(profiles);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})


router.get('/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.json(profile);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})

module.exports = router;

