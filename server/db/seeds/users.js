
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'JohnConnor', password: 'abc123', email:'jc@terminated.com', admin: false, bio: 'To trusting of robots that look like Arnold'},
        {id: 2, username: 'HarryPotter', password: 'abc123', email:'voldemortKryptonite@magic.com', admin: false, bio:'Eraser of those who should not be named'},
        {id: 3, username: 'Akame', password: 'abc123', email:'killerSword@assassinqueen.com', admin: false, bio:'A killer that never misses her target'}
      ]);
    });
};
