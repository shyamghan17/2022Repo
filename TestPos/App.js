import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./src/stackNavigation/StackScreen";
import Store from "./src/Global/reducer";
import { Provider } from "react-redux";

const App = () => {
  const { reduxStore } = Store();
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
