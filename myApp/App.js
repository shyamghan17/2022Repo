import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "./src/AppScreen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import { Store } from "./src/redux/store";

const [counter, setCounter] = React.useState(0);

const Increase = () => {
  setCounter(counter + 1);
};
const Decrease = () => {
  setCounter(counter - 1);
};
const reducer = (state = counter) => {
  return state;
};
const store = createStore(reducer);
export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={Store}>
        <AppScreen />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
