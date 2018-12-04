import {
  getAllUsers,
  insertUser,
  updateUser,
  getUser,
  deleteUser
} from './users'
import {
  getAllProducts,
  getProduct,
  insertProduct,
  updateProduct,
  deleteProduct
} from './products'
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
