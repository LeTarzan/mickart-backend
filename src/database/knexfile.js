const directory = require('path').resolve(__dirname, 'migrations')
require('dotenv').config()
module.exports = {
  client: 'pg',
  connection: {
    host: process.env.INSTANCE_CONNECTION_NAME || '127.0.0.1',
    port: 5432,
    user: process.env.SQL_USER || 'postgres',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DATABASE || 'mickarte'
  },
  pool: { min: 1, max: 100 },
  migrations: {
    directory: directory
  }
}
