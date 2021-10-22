const {Router} = require('express');
const router = Router();
const auth = require('../middleware/auth.middleware');
const User = require('../models/User');
const Profile = require('../models/Profile');

router.post('/create', auth, async (req, res) => {
  try {
    const {name, gender, birthdate, city} = req.body;

    const profile = new Profile({
      name, gender, birthdate, city, owner: req.User.userId
    })

    await profile.save();

    await User.findByIdAndUpdate(req.User.userId, {
      $push: {
        profiles: profile._id
      }
    })

    res.status(201).json({ message: 'Profile created' });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time' });
  }
})

router.get('/all', auth, async (req, res) => {
  try {
    console.log('/');
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})

router.get('/', auth, async (req, res) => {
  try {
    console.log('/');
    const profiles = await Profile.find({ owner: req.User.userId });
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

