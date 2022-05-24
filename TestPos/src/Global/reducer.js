import { initialState } from "./state";
import { combineReducers, createStore } from "redux";
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_TABLE":
      return {
        ...state,
        selectedTable: action.payload,
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
      break;
  }
};

//root Reducers

const rootReducer = combineReducers({
  counter,
});

// redux store

export default () => {
  let reduxStore = createStore(rootReducer);
  return { reduxStore };
};
