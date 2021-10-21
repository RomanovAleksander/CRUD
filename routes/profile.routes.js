const {Router} = require('express');
const router = Router();
const Profile = require('../models/Profile');

router.post('/create', async (req, res) => {
  try {

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})


router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find({ owner: null }) //??
    res.json(profiles);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})


router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.json(profile);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try one more time'});
  }
})

module.exports = router;

