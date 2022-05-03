import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const PrintScreen = ({ navigation }) => {
  return (
    <View>
      <Text>PrintScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="caretright" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default PrintScreen;

const styles = StyleSheet.create({});
