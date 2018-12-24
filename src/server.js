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

require('./database')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/address', AddressController)

app.use('/users', UsersController)

app.use('/products', ProductsController)

app.use('/type-payment', TypePaymentController)

app.use('/list', ListController)

app.use('/sells', SellsController)

app.use('/role', RoleController)

app.get('/', (req, res) => {
  res.json({ msg: 'Bem-vindo!' })
})

app.listen(3000, error => {
  error && console.log('error ', error)
})
