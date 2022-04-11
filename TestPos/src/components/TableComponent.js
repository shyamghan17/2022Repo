import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const TableComponent = ({ tableName }) => {
  return (
    <View style={[styles.tableComponent, styles.shadowForAll]}>
      <View>
        <Text style={styles.tableText}>
          {tableName}
        </Text>
      </View>
    </View>
  );
};

export default TableComponent;


