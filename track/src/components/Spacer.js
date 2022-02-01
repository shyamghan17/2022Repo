import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Spacer = ({ childrean }) => {
  return <View style={styles.spacer}>{childrean}</View>;
};
const styles = StyleSheet.create({
  spacer: {
    marginTop: 21,
  },
});

export default Spacer;
