const getAllUsers = require('./users')
const insertUser = require('./users')
const updateUser = require('./users')
const getUser = require('./users')
const deleteUser = require('./users')

const getAllProducts = require('./products')
const getProduct = require('./products')
const insertProduct = require('./products')
const updateProduct = require('./products')
const deleteProduct = require('./products')

console.log('Services')

/*
  Por serviços entenda as funções que vão ser responsáveis
  pela comunicação com o DB.
  Conhecido como CRUD rs
*/

exports.getAllUsers = getAllUsers
exports.insertUser = insertUser
exports.updateUser = updateUser
exports.getUser = getUser
exports.deleteUser = deleteUser
exports.getAllProducts = getAllProducts
exports.getProduct = getProduct
exports.insertProduct = insertProduct
exports.updateProduct = updateProduct
exports.deleteProduct = deleteProduct
