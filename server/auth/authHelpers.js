const bcrypt = require('bcrypt')
const connection = require('../db/connection')

function passCheck (userPass, dbPass, db = connection) {
  return bcrypt.compareSync(userPass, dbPass)
}

function createUser (req, res, db = connection) {
  return handleErrors(req)
    .then(() => {
      const salt = bcrypt.genSaltSync()
      const hash = bcrypt.hashSync(req.body.password, salt)
      return db('users')
        .inserts({
          username: req.body.username,
          password: hash
        })
        .returning('*')
    })
    .catch((err) => {
      res.status(400).json({status: err.message})
    })
}

function loginReq (req, res, next) {
  if(!req.user) res.status(401).json({status: 'Please log in'})
  return next()
}

function adminReq ( req, res, next, db = connection) {
  if(!req.user) res.status(401).json({status: 'Please Log In'})
  return db('users').where({username: req.user.username}).first()
    .then(user => {
      if(!user.admin) res.status(401)
    })
}