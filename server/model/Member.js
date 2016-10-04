const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  nickName: {type: String, required:true, unique: true},
  email: {type: String, required:true, unique: true },
  password: {type: String, required:true, select:false},
  roles: [],
  state: {type: String, default: 'active'}
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;