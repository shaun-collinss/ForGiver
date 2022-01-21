
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, userName: 'John Connor', email:'jc@terminated.com', bio: 'To trusting of robots that look like Arnold'},
        {id: 2, userName: 'Harry Potter', email:'voldemortKryptonite@magic.com', bio:'Eraser of those who should not be named'},
        {id: 3, userName: 'Akame', email:'killerSword@assassinqueen.com', bio:'A killer that never misses her target'}
      ]);
    });
};
