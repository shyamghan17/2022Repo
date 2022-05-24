import { combineReducers, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

//state

const initialState = {
  count: 0,
};

// Actions
export const IncreaseCount = () => {
  return {
    type: "INCREMENT_COUNT",
  };
};
export const DecreaseCount = () => {
  return {
    type: "DECREMENT_COUNT",
  };
};

//Reducer

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1,
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

// RootReducer
const rootReducer = combineReducers({
  counter,
});
//Persittance config
const PersistConfig = {
  key: "root",
  storage: AsyncStorage,
};
//Persist Reducer
const persistedReducer = persistReducer(PersistConfig, rootReducer);
// redux store
export default () => {
  let reduxStore = createStore(persistedReducer);
  let persister = persistStore(reduxStore);
  return { reduxStore, persister };
};
