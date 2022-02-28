const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
  userExists,
  getUserByName,
}


//getting user functions here
function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').select().where('id', id).first()
}

function createUser(data, db = connection) {
  return db('users').insert(data)
    .then(([id]) => {
      getUser(id)
      return null
    })
}

function updateUser (id, updateData, db = connection) {
  return db('users').select().where('id', id).update(updateData)
    .then(id => {
      getUser(id)
      return null
    })
}

function deleteUser (id, db = connection) {
  return db('users').where('id', id).select().delete()
}

function getUserByName (userName, db = connection ) {
  return db('users').select().where({userName}).first()
}

function userExists (userName, db = connection ) {
  return db('users').count('id as n').where({userName}).then(count => {
    return count[0].n > 0
  })
}