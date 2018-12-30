const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const AddressController = require('./controllers/address')
const UsersController = require('./controllers/users')
const ProductsController = require('./controllers/products')
const TypePaymentController = require('./controllers/typePayment')
const ListController = require('./controllers/list')
const SellsController = require('./controllers/sells')
const RoleController = require('./controllers/role')
const { requireSignIn } = require('./services/auth')

require('./database')
require('./config/passport')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/addresses', AddressController)

app.use('/users', UsersController)

app.use('/products', ProductsController)

app.use('/type-payments', TypePaymentController)

app.use('/lists', ListController)

app.use('/sells', SellsController)

app.use('/roles', RoleController)

app.get('/', (req, res) => {
  res.json({ msg: 'Bem-vindo!' })
})

app.post('/login', requireSignIn, (req, res) => {
  console.log('req login...', req.user)
  return req.user
})

app.listen(3000, error => {
  error && console.log('error ', error)
})
