import { loggingIn, getUsers, logOut, createUser } from '../api'

// Admin Stuff
// These here are the reducer function calls
export const SET_USERS = 'SET_USERS'
export const FIND_USER = 'FIND_USER'


// User Stuff
export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

// This function here is called after information is returned from the API in the Thunk function
export function setUsers (users) {
  //The below is returning an reducer function and then giving it data to update the redux state.
  return {
    // The below is the type of function that will be called inside the reducer
    type: SET_USERS,
    // This here is the information thats passed to function inside the reducer. the switch statement has (action.type) so when SET_USERS is called it will return action.users as the call.
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
// Thunks are called from with the React pages, ussually triggered by button press functions.
// Thunks are a combination of functions, The first function called is the API call, the example for this is getUsers, it sends out an API call to get information from either your own server or the API you are using. The .then returns information and then dispatches that information through the dispatch call to Redux which sends the information through to the reducer and updates the current state in redux. 

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
export function registerUser(user) {
  return (dispatch) => {
    return createUser(user)
      .then(user => {
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function loginUser (user) {
  return (dispatch) => {
    return loggingIn(user)
      .then(user => {
        if(user.id === null){dispatch(clearUser(user))} else {
        dispatch(setUser(user))
        localStorage.setItem('user', JSON.stringify(user))
      }
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
        dispatch(clearUser(user))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}