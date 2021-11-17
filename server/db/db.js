const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getUsers,
  getUser,
}


//getting user functions here
function getUsers (db = connection) {
  return ('users').select()
}

function getUser (id, db = connection) {
  return ('users').select().where('id', id).first()
}

//getting card collection here
// function getCollection (db = connection) {

// }