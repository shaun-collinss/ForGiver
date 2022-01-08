const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getInventory,
  getItem,
  addItem,
  updateItem,
  deleteItem
}

function getInventory (db = connection) {
  return db('inventory').select()
}

function getItem (id, db = connection) {
  return db('inventory').select().where('id', id).first()
}

function addItem(item, db = connection) {
  return db('inventory').insert(item)
    .then(([newId]) => {
      getItem(newId, db)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
}

function updateItem(id, updateData, db = connection) {
  const {name, category, description, image, amount, user_id} = updateData
  return db('inventory').update({name, category, description, image, amount, user_id}).where({id})
  .then(() => {
    getItem(id, db)
    return null
  })
  .catch(err => {
    console.log(err.message)
  })
}

function deleteItem(id, db = connection) {
  return db('inventory').where('id', id).delete()
}