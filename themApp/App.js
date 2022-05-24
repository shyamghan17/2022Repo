import React, { useState, useReducer } from "react";
import store from "./src/reduxProvider";
import HomeScreen from "./src/HomeScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  CounterContext,
  initialState,
  counter,
} from "./src/ContextApiProvider";
import ContextScreen from "./src/ContexScreen";
import { StoreProvider } from "easy-peasy";
import easyPeasyStore from "./src/easyPeasy";
const App = () => {
  const { reduxStore, persister } = store();
  const [state, dispatch] = useReducer(counter, initialState);

  return (
    <StoreProvider store={easyPeasyStore}>
      {/* <CounterContext.Provider value={[state, dispatch]}>
        <PersistGate loading={null} persistor={persister}>
          {/*  Redux store Porvider 
          <Provider store={reduxStore}> 
            <HomeScreen /> */}
            <ContextScreen />
          {/* </Provider>
        </PersistGate>
      </CounterContext.Provider> */}

    </StoreProvider>
  );
};

export default App;
