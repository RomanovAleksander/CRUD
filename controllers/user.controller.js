const User = require("../models/User");
const Profile = require("../models/Profile");

class userController {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time'});
    }
  }

  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.json(user);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time'});
    }
  }

  async updateUser(req, res) {
    try {
      await User.findByIdAndUpdate(req.body.id, {...req.body.user});
      res.status(201).json({ message: 'Profile updated', user: req.body.user });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time' });
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.body.userId);
      await Profile.find({ owner: req.body.userId })
      res.status(201).json({ message: 'User deleted', id: user._id });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time' });
    }
  }
}

module.exports = new userController();
