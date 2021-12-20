import { SET_INVENTORY } from "../actions/inventory"

const initialState = []


export default function inventory (state = initialState, action) {
  switch (action.type) {
    case SET_INVENTORY:
      return action.state
    default:
      return state
  }
}