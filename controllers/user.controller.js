const User = require("../models/User");

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
}

module.exports = new userController();
