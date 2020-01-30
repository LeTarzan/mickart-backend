const passport = require('passport')

const LocalStrategy = require('passport-local')
const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt')

const { getUserByUsername, getUser } = require('../../services/users')
const { comparePassword } = require('../../services/password')
const { verifyToken } = require('../../services/token')

const secret = 'shake it bololo'

passport.use(new LocalStrategy(async function (username, password, done) {
  try {
    console.log('rsrsrs', username)
    let result = await getUserByUsername({ username })
    console.log('abbb', result)
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

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
}

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    let user = await getUser(payload)
    if (!user) {
      return done(null, false)
    }
    done(null, user)
  } catch (error) {
    return done(null, false)
  }
}))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})