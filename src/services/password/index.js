const bcrypt = require('bcrypt')

const encryptPassword = (password) => bcrypt.hash(password, 10)

const comparePassword = (password, dbPassword) => bcrypt.compareSync(password, dbPassword)

exports.comparePassword = comparePassword
exports.encryptPassword = encryptPassword
