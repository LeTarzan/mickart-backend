const passport = require('passport')

const LocalStrategy = require('passport-local')

const { getUserByUsername } = require('../../services/users')
const { comparePassword } = require('../../services/password')

passport.use(new LocalStrategy(async function (username, password, done) {
  console.log('resultado 1..', username, password)
  try {
    let result = await getUserByUsername({ username })
    result = result[0]
    console.log('resultado 2..', result)
    if (!result.username) {
      return done(null, false, { message: 'Username incorreta.' })
    }
    if (!comparePassword(password, result.password)) {
      return done(null, false, { message: 'Password incorreta.' })
    }
    const { password: passwordDB, ...userNoPassword } = result
    return done(null, userNoPassword)

  } catch (error) {
    return done(error)
  }
}))
