import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { CounterContext } from "./redux/contextProvider";
import { DecreaseCount, IncreaseCount } from "./redux/action";

const ContextScreen = () => {
  const [state, dispatch] = useContext(CounterContext);

  const incrementCount = () => {
    dispatch(IncreaseCount());
  };
  const decremntCount = () => {
    dispatch(DecreaseCount());
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{state.count}</Text>
      </View>
      <View style={styles.touchabelContainer}>
        <TouchableOpacity onPress={incrementCount}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decremntCount}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={state.data}
        keyExtractor={(item, index) => item.color}
        renderItem={({ item }) => (
          <View>
            <Text>{item.color}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ContextScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    // backgroundColor: "blue",
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
