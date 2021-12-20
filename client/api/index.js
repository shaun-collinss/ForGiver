import request from 'superagent'

const userUrl = '/api/v1/users'
const inventoryUrl = '/api/v1/inventory'

// All Users Api Calls
export function getUsers () {
  return request
    .get(userUrl)
    .then(response => response.body)
}

export function getUser(id) {
  return request
    .get(`${userUrl}/${id}`)
    .then(res => res.body)
}

// Single User Calls
export function loadUser(user) {
  return request
    .post(userUrl)
    .send(user)
    .then(res => res.body)
}

export function logOut(id) {
  return request
    .get(`${userUrl}/${id}`)
    .then(res => res.body)
}

// Inventory Calls

export function getInventory() {
  return request
    .get(inventoryUrl)
    .then(res => res.body)
}