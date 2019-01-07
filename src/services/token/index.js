const jwt = require('jwt-simple')
const secret = '123qwe123'

const verifyToken = async function(token) {
  try {
    const decodeToken = jwt.decode(token, secret)
    console.log('token ..', decodeToken)
    return true
  } catch (error) {
    return false
  }
}

const generateToken = async function(id, username) {
  try {
    if ((!id) || (!username)) {
      return { msg: 'Dados incorretos' }
    }
    const token = await jwt.encode({ id, username }, secret)
    return { token }
  } catch (error) {
    console.log('erro.. ', error)
    throw error
  }
}

exports.generateToken = generateToken
exports.verifyToken = verifyToken
