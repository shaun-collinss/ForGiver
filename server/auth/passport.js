const passport = require('passport')
const db = require ('../db/users')

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    return db('users').where({id}).first()
      .then(user => done (null, user))
      .catch(err => done(err, null))
  })
}