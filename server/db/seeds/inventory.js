
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {id:100, name: 'Steak', category: 'Food', description: 'lean steaks for pickup',image:'image' , amount: 2, user_id:1 },
        {id:101, name: 'Jacket', category: 'Clothes', description: '2 year old jackets',image:'image', amount: 3, user_id:1 },
        {id:102, name: 'Wand', category: 'Tools', description: 'The wand that is the best',image:'image', amount: 1, user_id:2 },
        {id:103, name: 'Sword', category: 'Weapon', description: 'Legendary blade that kills anything it cuts',image:'image', amount: 2, user_id:3 },
        {id:104, name: 'Tie', category: 'Clothes', description: 'Smart business tie to look stylie',image:'image', amount: 2, user_id:3 },
      ]);
    });
};
