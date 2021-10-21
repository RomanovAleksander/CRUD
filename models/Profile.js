const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  name: {type: String, required: true},
  gender: {type: String, required: true},
  birthdate: {type: String, required: true},
  city: {type: String, required: true},
  owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Profile', schema)
