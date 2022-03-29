import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const Title = ({ title }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>
        {title}
      </Text>
    </View>
  );
};

export default Title;
