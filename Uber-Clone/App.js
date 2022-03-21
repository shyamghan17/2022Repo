import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
 <View style={styles.container}>
      <Text>lets build uber</Text>
      <StatusBar style="auto" />
    </View>
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
