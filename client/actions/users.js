import { loadUser, getUsers } from '../api'

export const SET_USERS = "SET_USERS"

export function setUsers (user) {
  return {
    type: SET_USERS,
    user
  }
}


// Thunks here
export function fetchUsers () {
  return (dispatch) => {
    return getUsers()
      .then(users => {
        dispatch(setUser(users))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
} 

