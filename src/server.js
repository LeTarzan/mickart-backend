import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { UsersController } from './controllers'
import './database'

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/users', UsersController)

app.get('/', (req, res) => {
  res.json({ msg: 'Bem-vindo!' })
})

app.listen(3000, error => {
  error && console.log('error ', error)
})
