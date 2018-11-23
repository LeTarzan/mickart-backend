const directory = require('path').resolve(__dirname, 'migrations')

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DEV
      ? '127.0.0.1'
      : `${process.env.INSTANCE_CONNECTION_NAME}`,
    user: process.env.DEV ? 'postgres' : `${process.env.SQL_USER}`,
    password: process.env.DEV ? 'Rafa0937' : `${process.env.SQL_PASSWORD}`,
    database: process.env.DEV ? 'mickarte' : `${process.env.SQL_DATABASE}`
  },
  pool: { min: 1, max: 100 },
  migrations: {
    directory: directory
  }
}
