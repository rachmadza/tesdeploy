const jwt = require('jsonwebtoken');

function generateToken(data) {
  const token = jwt.sign(data, 'inilhosecretnya')
  return token
}

module.exports = generateToken