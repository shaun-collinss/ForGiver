import request from 'superagent'

const userUrl = '/api/v1/users/'
const serverUrl = 'http://localhost:3000/api/v1'

export function getUsers () {
  return request
    .get(userUrl)
    .then(response => response.body)
}
