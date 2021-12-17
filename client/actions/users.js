import { loadUser, getUsers, logOut } from '../api'

// Admin Stuff
export const SET_USERS = 'SET_USERS'
export const FIND_USER = 'FIND_USER'


// User Stuff
export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUsers (users) {
  return {
    type: SET_USERS,
    users
  }
}

export function findUser (id) {
  return {
    type:FIND_USER,
    id
  }
}


export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER
  }
}


// Thunks here, All user Thunks
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

// Single User Thunks
export function loginUser (user) {
  return (dispatch) => {
    return loadUser(user)
      .then(user => {
        dispatch(setUser(user))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function logOutUser (user) {
  return (dispatch) => {
    return logOut(user.id)
      .then(() => {
        dispatch(clearUser())
      })
  }
}