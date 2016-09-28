require('../config/mogoose.config');
const Member = require('./Member');
const toHash = require('../util/toHash');

// const leonam = new Member({
//   nickName:'Leo',
//   email:'l@l',
//   password: toHash('123'),
//   roles: ["admin","member"]
// });
//
// leonam.save().then(function (doc) {
//   console.log(doc)
// }, function (err) {
//   console.error(err)
// });

// Member.find({}).exec().then(function (doc) {
//   console.log(doc);
// });
//
// Member.findOne({email: 'l@l'}).select('password').exec().then(function (doc) {
//   console.log(doc);
// });

// Member.findById('57ec5118ef0b94151434e85e').then(function (doc) {
//   console.log(doc);
// });