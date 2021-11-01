const User = require('../models/User');
const Profile = require('../models/Profile');

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

class userController {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(201).json(users);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time'});
    }
  }

  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.status(201).json(user);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try one more time'});
    }
  }

  async updateUser(req, res) {
    try {
      if (!req.body.user.username.length) {
        return res.status(400).json({ message: 'Incorrect username' });
      }

      if (!validateEmail(req.body.user.email)) {
        return res.status(400).json({ message: 'Incorrect email' });
      }

      const {email, username} = req.body.user;

      const candidateByEmail = await User.findOne({ email });
      const candidateByUsername = await User.findOne({ username });

      if (candidateByEmail && candidateByEmail._id.toString() !== req.body.user._id) {
        return res.status(400).json({ message: 'A user with this email already exists' });
      }

      if (candidateByUsername && candidateByUsername._id.toString() !== req.body.user._id) {
        return res.status(400).json({ message: 'A user with this username already exists' });
      }

      const user = await User.findByIdAndUpdate(req.body.id, {...req.body.user});
      res.status(201).json({ message: 'Profile updated', user: user });
    } catch (e) {
      res.status(500).json(e.message);
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
