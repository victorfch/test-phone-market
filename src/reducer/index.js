import { combineReducers } from "redux"
import { cartReducer } from "./cartReducer"
import { filterReducer } from "./filterReducer"
import { phonesReducer } from "./phonesReducer"

export const reducer = combineReducers({
  phones: phonesReducer,
  filter: filterReducer,
  cart: cartReducer
})