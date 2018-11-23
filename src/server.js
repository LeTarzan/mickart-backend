import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { UsersController } from './controllers'

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
// por enquanto deixamos aqui, depois organizamos isso
require('./services/')

app.use('/users', UsersController)

app.get('/', (req, res) => {
  res.json({ msg: 'Bem-vindo!' })
})

app.listen(3000, error => {
  console.log('error ', error)
})
