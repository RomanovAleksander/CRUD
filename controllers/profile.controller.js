const Profile = require('../models/Profile');
const User = require('../models/User');
const getAdultsCount = require('../utils/profiles');

class profileController {
  async createProfile(req, res) {
    try {
      const {name, gender, birthdate, city, userId} = req.body;
      let id;
      if (userId === undefined) {
        id = req.User.userId;
      } else {
        id = userId;
      }
      const profile = new Profile({
        name, gender, birthdate, city, owner: id
      })
      await profile.save();
      await User.findByIdAndUpdate(id, {
        $push: {
          profiles: profile._id
        }
      })

      res.status(201).json({message: 'Profile created', profile});
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, try one more time'});
    }
  }

  async updateProfile(req, res) {
    try {
      await Profile.findByIdAndUpdate(req.body._id, {...req.body});
      res.status(201).json({ message: 'Profile updated', profile: req.body });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time' });
    }
  }

  async deleteProfile(req, res) {
    try {
      await Profile.findByIdAndDelete(req.body.id);
      await User.findByIdAndUpdate(req.User.userId, {
        $pull: {
          profiles: req.body.id
        }
      })
      res.status(201).json({ message: 'Profile deleted' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time' });
    }
  }

  async getProfiles(req, res) {
    try {
      const profiles = await Profile.find();
      res.json({profiles, adults: getAdultsCount(profiles)});
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time'});
    }
  }

  async getProfilesByUser(req, res) {
    try {
      const profiles = await Profile.find({ owner: req.User.userId });
      res.json(profiles);
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, try one more time'});
    }
  }

  async getProfilesByUserId(req, res) {
    try {
      const profile = await Profile.find({ owner: req.params.id });
      res.json(profile);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time'});
    }
  }
}

module.exports = new profileController();
