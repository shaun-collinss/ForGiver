const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getInventory,
  getItem,
  updateItem,
  deleteItem
}

function getInventory (db = connection) {
  return db('inventory').select()
}

function getItem (id, db = connection) {
  return db('inventory').select().where('id', id).first()
}

function updateItem(updateData, db = connection) {
  return db('inventory').select().where({id}).update(updateData)
}

function deleteItem(id, db = connection) {
  return db('inventory').select().where('id', id).delete()
}