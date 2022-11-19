const express = require('express')
const router = express.Router()
const db = require('../db/users')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
  const newUser = req.body
  const {username, email, password} = newUser
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = {username, email, password: hashedPassword}

    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/login', async (req, res) => {
  const {username, password} = req.body
  const user = await db.getUserByName(username)
  if (user = null){
    return res.status(400).send('Cannot Find User')
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      res.json(user)
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

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