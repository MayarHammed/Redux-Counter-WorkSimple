import { combineReducers } from "redux";
import { ReducerCounter } from "./reducer";
import { ReducerAuth } from "./reducerAuth";


export const rootreducer = combineReducers({
    counter : ReducerCounter,
    Auth : ReducerAuth
})