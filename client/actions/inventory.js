import { getInventory } from '../api'

export const SET_INVENTORY = 'SET_INVENTORY'

export function setInventory(inventory) {
  return {
    type: SET_INVENTORY,
    inventory
  }
}







export default function fetchInventory() {
  return (dispatch) => {
    return getInventory() 
      .then(inventory => {
        dispatch(setInventory(inventory))
        return null
      })
    .catch(err => {
      console.log(err.message)
    })
  }
}