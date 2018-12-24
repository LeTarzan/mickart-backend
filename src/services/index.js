const {
  getAllUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser,
  getUserProfile
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

const {
  getAllPayment,
  getPayment,
  insertPayment,
  updatePayment,
  deletePayment
} = require('./payment')

const {
  getAddress,
  getAllAddress,
  insertAddress,
  updateAddress,
  deleteAddress
} = require('./address')

const {
  getRole,
  getAllRole,
  insertRole,
  updateRole,
  deleteRole
} = require('./role')

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
exports.getUserProfile = getUserProfile

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

exports.getAllPayment = getAllPayment
exports.getPayment = getPayment
exports.insertPayment = insertPayment
exports.updatePayment = updatePayment
exports.deletePayment = deletePayment

exports.getAddress = getAddress
exports.getAllAddress = getAllAddress
exports.insertAddress = insertAddress
exports.updateAddress = updateAddress
exports.deleteAddress = deleteAddress

exports.getRole = getRole
exports.getAllRole = getAllRole
exports.insertRole = insertRole
exports.updateRole = updateRole
exports.deleteRole = deleteRole
