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

router.post('/', (req, res) => {
  const user = req.body
  db.createUser(user)
    .then(user => {
      res.json(user)
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

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const {userName, email, bio} = req.body
  db.updateUser(id, {userName, email, bio})
    .then(user => {
      res.json(user)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteUser(id)
    .then(() => {
      res.json()
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


module.exports = router