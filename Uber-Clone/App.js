import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import { store } from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <HomeScreen/>

    </Provider>
   
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
