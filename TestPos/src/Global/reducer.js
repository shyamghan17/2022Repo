import { initialState } from "./state";
import { combineReducers, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const POS = (state = initialState, action) => {
  // console.log('action', action.payload, 'action');
  switch (action.type) {
    case "SELECT_TABLE":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_CART_ITEMS":
      return {
        ...state,
        cart: action.payload,
      };

    case "DECREMENT_COUNT":
      return {
        ...state.count,
        count: state.count - 1,
      };

    default:
      return state;
      break;
  }
};

// Persistanche congig

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
export const rootReducer = combineReducers({
  POS,
});

// persist Reducer
export const persistReducers = persistReducer(persistConfig, rootReducer);
