const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const AddressController = require('./controllers/address')
const UsersController = require('./controllers/users')
const ProductsController = require('./controllers/products')
const TypePaymentController = require('./controllers/typePayment')
const ListController = require('./controllers/list')
const SellsController = require('./controllers/sells')
const RoleController = require('./controllers/role')
const TokenController = require('./controllers/token')
const PasswordController = require('./controllers/password')
const { requireSignIn } = require('./services/auth')
const { generateToken } = require('./services/token')

require('./database')
require('./config/passport')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/addresses', AddressController)

app.use('/users', UsersController)

app.use('/products', ProductsController)

app.use('/type-payments', TypePaymentController)

app.use('/lists', ListController)

app.use('/sells', SellsController)

app.use('/roles', RoleController)

app.use('/token', TokenController)

app.use('/password', PasswordController)

app.get('/', (req, res) => {
  res.json({ msg: 'Bem-vindo!' })
})

app.post('/login', requireSignIn, async (req, res) => {
  console.log('req login...', req.user)
  const { id, username, rid } = req.user
  let token = await generateToken(id, username)
  res.status(200).json({ msg: 'acertô mizeravi', token, id, rid })
})

app.listen(process.env.PORT || 3000, error => {
  error && console.log('error ', error)
})
