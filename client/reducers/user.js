import {SET_USER} from '../actions/user'

const initialState = {}

const user = (state = initialState, action) => {
  switch(action.type){
    case SET_USER:
      return action.user
    default:
      return state
  }
}

export default user