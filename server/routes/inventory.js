const express = require('express')
const router = express.Router()

const db = require('../db/inventory')

router.get('/', (req, res) => {
  db.getInventory()
  .then(inventory => {
    res.json(inventory)
    return null
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getItem(id)
  .then(item => {
    res.json(item)
    return null
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

module.exports = router

