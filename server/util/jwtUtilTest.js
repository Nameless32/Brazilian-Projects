const jwtUtil = require('./jwtUtil');


const payload = {_id:1, name:'Adriano'};

const token = jwtUtil.makeToken(payload)
console.log(jwtUtil.getPayload(token));