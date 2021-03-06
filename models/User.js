const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  isAdmin: {type: Boolean, required: true},
  profiles: [{ type: Types.ObjectId, ref: 'Profile' }]
});

module.exports = model('User', schema)
