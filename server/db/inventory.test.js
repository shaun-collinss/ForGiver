const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const {
  getInventory,
  getItem,
  addItem,
  updateItem,
  deleteItem
} = require('./inventory')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('check how many items', () => {
  expect.assertions(1)
  return getInventory(testDb)
    .then(inventory => {
        expect(inventory).toHaveLength(5)
    })
})

test('return singular item', () => {
  expect.assertions(1)
  return getItem(100,testDb)
    .then(item => {
      expect(item.name).toEqual('Steak')
    })
})

// test('create Item', () => {
//   //expect.assertions(1)
//   return addItem({name: 'Jacket', category:'Food', description:'Warm winterware', image:'image', amount:3, user_id:1}, testDb)
//     .then(res => {
//       expect(res[0]).toEqual('Jacket')
//       return testDb('inventory').select()
//     })
//     .then(inventory => {
//       expect(inventory[5].name).toEqual('junk')
//     })
// })

// function getInventory (db = connection) {
//   return db('inventory').select()
// }

// function getItem (id, db = connection) {
//   return db('inventory').select().where('id', id).first()
// }

// function addItem(item, db = connection) {
//   return db('inventory').insert(item)
//     .then(([newId]) => {
//       getItem(newId, db)
//       return null
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// }

// function updateItem(id, updateData, db = connection) {
//   const {name, category, description, image, amount, user_id} = updateData
//   return db('inventory').update({name, category, description, image, amount, user_id}).where({id})
//   .then(() => {
//     getItem(id, db)
//     return null
//   })
//   .catch(err => {
//     console.log(err.message)
//   })
// }

// function deleteItem(id, db = connection) {
//   return db('inventory').where('id', id).delete()
// }