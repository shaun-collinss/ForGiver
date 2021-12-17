const express = require('express')
const router = express.Router()

const db = require('../db/users')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getUser(id)
    .then(user => {
      res.json(user)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })  
})



module.exports = router