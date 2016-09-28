const jsonWebToken = require('jsonwebtoken');

const secret = 'crazy';

function makeToken(payload) {
  return jsonWebToken.sign(payload, secret);
}

function isValid(token) {
  try {
    jsonWebToken.verify(token, secret);
    return true;
  } catch(err) {
    return false;
  }
}

function getPayload(token) {
   return jsonWebToken.decode(token, {complete: true}).payload;
}

module.exports = {
  makeToken: makeToken,
  isValid:isValid,
  getPayload: getPayload
};