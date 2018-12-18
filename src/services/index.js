const {
  getAllUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser
} = require('./users')

const {
  getAllProducts,
  insertProduct,
  updateProduct,
  getProduct,
  deleteProduct
} = require('./products')

const {
  getAllTypeOfPayment,
  getTypeOfPayment,
  insertTypeOfPayment,
  updateTypeOfPayment,
  deleteTypeOfPayment
} = require('./typePayment')

const {
  getAllList,
  getList,
  insertList,
  updateList,
  deleteList
} = require('./list')

const {
  getAllSells,
  getSell,
  insertSell,
  updateSell,
  deleteSell
} = require('./sells')

console.log('Services')

/*
  Por serviços entenda as funções que vão ser responsáveis
  pela comunicação com o DB.
  Conhecido como CRUD rs
*/

exports.getAllTypeOfPayment = getAllTypeOfPayment
exports.getTypeOfPayment = getTypeOfPayment
exports.insertTypeOfPayment = insertTypeOfPayment
exports.updateTypeOfPayment = updateTypeOfPayment
exports.deleteTypeOfPayment = deleteTypeOfPayment

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

exports.getAllList = getAllList
exports.getList = getList
exports.insertList = insertList
exports.updateList = updateList
exports.deleteList = deleteList

exports.getAllSells = getAllSells
exports.getSell = getSell
exports.insertSell = insertSell
exports.updateSell = updateSell
exports.deleteSell = deleteSell
