import {SET_USER} from '../actions/user'

const initialState = {}

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