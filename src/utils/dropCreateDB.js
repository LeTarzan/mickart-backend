const KNEX = require('knex')

require('dotenv').config()

const configs = {
  client: 'pg',
  connection: {
    host: process.env.INSTANCE_CONNECTION_NAME || '127.0.0.1',
    port: process.env.SQL_PORT || 53502,
    user: process.env.SQL_USER || 'postgres',
    password: process.env.SQL_PASSWORD || 'root',
    database: 'postgres'
  },
  pool: { min: 1, max: 100 }
}

const knex = KNEX(configs)

const createDB = () => {
  knex.raw(`CREATE DATABASE ${process.env.SQL_DATABASE};`)
    .then(resu => {
      console.log('result createDB', resu)
      process.exit(0)
    })
    .catch(err => {
      console.log('err createDB = ', err)
      process.exit(0)
    })
}

knex.raw(`DROP DATABASE ${process.env.SQL_DATABASE};`)
  .then(result => {
    console.log('result dropDB ', result)
    createDB()
  })
  .catch(err => {
    if (err.code === '3D000') {
      return createDB()
    }
    console.log('deu erro', err)
    process.exit(0)
  })
