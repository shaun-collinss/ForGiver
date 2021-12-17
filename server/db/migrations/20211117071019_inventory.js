
exports.up = function(knex) {
  return knex.schema.createTable('inventory', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('category')
    table.text('description')
    table.string('image')
    table.integer('amount')
    table.integer('user_id')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('inventory')
};
