import { StyleSheet, Text, View,TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge } from "./redux/action";
const AppScreen = () => {
  const { name, age } = useSelector(state => state.useReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View
        style={{ 
          flexDirection: "row",
          justifyContent: "space-around",
          width: 200
        }}
      >
        <TextInput placeholder="NAME"></TextInput>
        <TextInput placeholder="Age"></TextInput>

        <TouchableOpacity onPress={() => Decrease()}>
          <Text>Decrease</Text>
        </TouchableOpacity>
        <Text>

        </Text>
        <TouchableOpacity onPress={() => Increase()}>
          <Text>Increase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};

export default connect(mapStateToProps)(AppScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
