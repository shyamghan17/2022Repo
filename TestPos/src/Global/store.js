import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

// redux store
import { persistReducers } from "./reducer";

export default () => {
  let reduxStore = createStore(persistReducers);
  let persister = persistStore(reduxStore);
  return { reduxStore, persister };
};
