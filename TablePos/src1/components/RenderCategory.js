import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const RenderCatagory = ({ item }) => {
  return (

    
    <TouchableOpacity
      key={item.id}
      onPress={onPres}
    >
      <View >
        <Text >
          {item.Category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderCatagory;


