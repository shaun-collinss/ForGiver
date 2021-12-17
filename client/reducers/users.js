import {SET_USERS, FIND_USER} from '../actions/users'

const initialState = []

const users = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS:
      return action.users
    case FIND_USER:
      return state.find((users) => users.id == action.id)
    default:
      return state
  }
}

export default users