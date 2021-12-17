const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getInventory,
  getItem,
}

function getInventory (db = connection) {
  return db('inventory').select()
}

function getItem (id, db = connection) {
  return db('inventory').select().where('id', id).first()
}


