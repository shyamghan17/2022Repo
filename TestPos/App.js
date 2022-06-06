import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./src/stackNavigation/StackScreen";
import Store from "./src/Global/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const { reduxStore, persister } = Store();
  return (
    <PersistGate loading={null} persistor={persister}>
      <Provider store={reduxStore}>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;

const styles = StyleSheet.create({});
