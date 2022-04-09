import thunk from "redux-thunk"
import reducer from "./reducer"
import { createStore, applyMiddleware } from "redux"
import { IRootReducer } from "./reducer"

const store = createStore(reducer, applyMiddleware(thunk))
export default store

export type { IRootReducer }