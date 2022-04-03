import {  Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const Total = ({ total }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>Total:{total}</Text>
    </View>
  );
};

export default Total;
