const request = require('supertest')
const server = require('../server')
const db = require('../db/inventory')

jest.mock('../db/inventory')



describe('tests for inventory', () => {
  test('check getItem', () => {
    db.getInventory.mockReturnValue(Promise.resolve([{id: 106, name: 'Hammer', description: 'used for nails'}]))
    expect.assertions(1)
    return request(server)
      .get('/inventory')
      .then(res => {
        expect(res.id).toContain(106)
      })
    })

})