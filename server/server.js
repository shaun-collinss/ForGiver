const request = require('superagent')
const path = require('path')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const users = require('./routes/users')

const server = express()

module.exports = server

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/api/v1/users/', users)

function collectionNumber (num) {
  console.log(typeof num)
  if (num === '1') {
    return '1'
  } else {
    return num
  }
}

// server.get('/api/v1/cards', (req, res) => {
//   const collection = collectionNumber(req.headers.collection)

//   request.get('https://api.pokemontcg.io/v2/cards')
//     .set('X-Api-Key', '1e6cedb8-03ce-476a-ab34-6bf08eed3fbd')
//     .set({ Type: 'application/json' })
//     .query({ pageSize: '25', page: collection })
//     .then(result => {
//       res.json(result.body.data)
//       return null
//     })
//     .catch(err => console.log(err))
// })