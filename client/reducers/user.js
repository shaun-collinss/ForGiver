import {SET_USER, CLEAR_USER} from '../actions/users'

const initialState = {
  id: 0,
  userName: '',
  email: '',
  bio: ''
}

const user = (state = initialState, action) => {
  switch(action.type){
    case SET_USER:
      return action.user
    case CLEAR_USER:
      return initialState
    default:
      return state
  }
}

export default user