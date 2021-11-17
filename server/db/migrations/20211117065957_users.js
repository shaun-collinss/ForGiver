
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('userName')
    table.string('email')
    table.text('bio')
  } )
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
