
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username').unique().notNullable()
    table.string('password').notNullable()
    table.string('email').unique()
    table.boolean('admin').notNullable().defaultTo(false)
    table.timestamps(true, true)
    table.text('bio')
  } )
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
