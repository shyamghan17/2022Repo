import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const TableComponent = ({ title }) => {
  return (
    <View
      style={styles.tableComponent}
    >
      <Text style={styles.tableText}>
        {title}
      </Text>
    </View>
  );
};

export default TableComponent;
