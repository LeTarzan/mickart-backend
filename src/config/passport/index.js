const passport = require('passport')

const LocalStrategy = require('passport-local')
const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt')

const { getUserByUsername } = require('../../services/users')
const { comparePassword } = require('../../services/password')

const secret = 'aqui digita qualquer coisa... !@#$!#!@#!'

passport.use(new LocalStrategy(async function (username, password, done) {
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

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
}

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    let user = await // aqui coloca o serviço para lista os dados do usuário
    console.log('passport.use user = ', user)
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