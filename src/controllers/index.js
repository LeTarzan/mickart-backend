const UsersController = require('./users')
const ProductsController = require('./products')
const TypePaymentController = require('./typePayment')
const ListController = require('./list')
const SellsController = require('./sells')
const PaymentoController = require('./payment')
const AddressController = require('./address')
const RoleController = require('./role')
const TokenController = require('./token')
const PasswordController = require('./password')

/*
  nessa pasta vão ficar os controllers, cada um dentro de sua respectiva pasta
  Exemplo:
  O controller de User vai ficar na pasta
  src/controllers  /user/index.js

  Os arquivos ficam sempre dentro de pastas e em um index.js
  - Pq isso?
  -- Para os requires ficarem mais bem organizados e seguirem um padrão
  (Eu não gosto, mas desse jeito também é mais fácil de criar uma função para
    importar automaticamente todos... é como se fizesse um for nas pastas e ir importando todos)
 */

exports.UsersController = UsersController
exports.ProductsController = ProductsController
exports.TypePaymentController = TypePaymentController
exports.ListController = ListController
exports.SellsController = SellsController
exports.PaymentoController = PaymentoController
exports.AddressController = AddressController
exports.RoleController = RoleController
exports.TokenController = TokenController
exports.PasswordController = PasswordController
