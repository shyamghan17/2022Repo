import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as CONSTANT from "../Constant/NavigationString";

const ResultScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Result Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(CONSTANT.Search)}>
        <Text>press me </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultScreen;
