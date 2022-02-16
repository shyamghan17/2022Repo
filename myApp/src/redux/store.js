import { createStore, combineReducers, ApplyMidddleware, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import useReducer from "./reducers";

const rootReducer = combineReducers({useReducer})


export const Store = createStore(rootReducer, applyMiddleware(thunk))