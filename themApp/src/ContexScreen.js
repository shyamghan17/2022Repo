import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  CounterContext,
  DecreaseCount,
  IncreaseCount,
} from "./ContextApiProvider";
import { useStoreActions, useStoreState } from "easy-peasy";

const ContextScreen = () => {
  //   const [state, dispatch] = useContext(CounterContext);

  //   const incrementCount = () => {
  //     dispatch(IncreaseCount());
  //   };
  //   const decremntCount = () => {
  //     dispatch(DecreaseCount());
  //   };
  const state = useStoreState((state) => state);
  const counterActions = useStoreActions((actions) => actions);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <LinearGradient
        style={styles.linearGradient}
        colors={["#4c669f", "#3b5998", "#192f6a"]}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{state.count}</Text>
        </View>
        <View style={styles.touchabelContainer}>
          <TouchableOpacity onPress={() => counterActions.increment()}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => counterActions.decrement()}>
            <Text>Decrease</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ContextScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  text: {
    fontSize: 20,
  },
  touchabelContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
