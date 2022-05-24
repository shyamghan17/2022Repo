import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseCount, DecreaseCount } from "./reduxProvider";


const HomeScreen = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

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
          <Text style={styles.text}>{counter.count}</Text>
        </View>
        <View style={styles.touchabelContainer}>
          <TouchableOpacity onPress={() => dispatch(IncreaseCount())}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(DecreaseCount())}>
            <Text>Decrease</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
HomeScreen;
