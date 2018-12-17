const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const UsersController = require('./controllers/users')
const ProductsController = require('./controllers/products')
require('./database')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/users', UsersController)

app.use('/products', ProductsController)

app.get('/', (req, res) => {
  res.json({ msg: 'Bem-vindo!' })
})

app.listen(3000, error => {
  error && console.log('error ', error)
})
