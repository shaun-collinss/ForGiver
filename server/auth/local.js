const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const init = require('./passport')
const db = require('../db/users')
const authHelpers = require('./authHelpers')

const options = {}

init()

passport.use(new LocalStrategy(options, (username, password, done) => {
  
  db.userExists(username)
    .then(user => {
      if(!user) return done(null, false)
      if(!authHelpers.passCheck(password, user.password)){
        return done(null, false)
      } else {
        return done(null, user)
      }
    })
    .catch(err => done(err))
}))

module.exports = passport