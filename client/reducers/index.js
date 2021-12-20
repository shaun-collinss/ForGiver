import { combineReducers } from 'redux'

import user from './user'
import users from './users'
import inventory from './inventory'

export default combineReducers({
  user,
  users,
  inventory
})