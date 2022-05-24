import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContextScreen from "./ContexScreen";
import { CounterContext, initialState } from "./redux/contextProvider";
import { counter } from "./redux/reducer";
import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(counter, initialState);
  return (
    <CounterContext.Provider value={[state, dispatch]}>
      <ContextScreen />
    </CounterContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
