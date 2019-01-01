const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const jwt = require('jwt-simple')
const cors = require('cors')

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
const secret = 'salt'

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors({
  origin: [
    'http://localhost:3000'
  ]
}))

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

app.post('/login', requireSignIn, async (req, res) => {
  console.log('req login...', req.user)
  const { id, username } = req.user
  const token = await jwt.encode({ id, username }, secret)
  res.status(200).json({ msg: 'acertô mizeravi', token })
})

app.listen(3000, error => {
  error && console.log('error ', error)
})
