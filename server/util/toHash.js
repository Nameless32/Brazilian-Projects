const crypto = require('crypto');

const secret = 'crazy';

function toHash(src) {
  return crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
}

module.exports = toHash;




