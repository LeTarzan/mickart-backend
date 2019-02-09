const jwt = require('jwt-simple')
const secret = 'shake it bololo'

const { getUser } = require('../users')

const verifyToken = async function(token) {
  try {
    const decodeToken = jwt.decode(token, secret)
    console.log('token ..', decodeToken)
    let dataUser = await getUser(decodeToken)
    console.log('roleid ', dataUser)
    return { result: true, roleid: dataUser[0].role_id }
  } catch (error) {
    return { result: false }
  }
}

const generateToken = async function(id, username) {
  try {
    if ((!id) || (!username)) {
      return { msg: 'Dados incorretos' }
    }
    const token = await jwt.encode({ id, username }, secret)
    return token
  } catch (error) {
    console.log('erro.. ', error)
    throw error
  }
}

exports.generateToken = generateToken
exports.verifyToken = verifyToken
