import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import TestScreen from "./TestScreen";

const ModalTest = () => {
  const [modelVisible, setModelVisible] = useState(false);

  return (
    <View style={{ marginTop: 100 }}>
      <Text> modal page </Text>
      <TouchableOpacity onPress={()=> setModelVisible(true)}>
        <Text>press me to seee modal </Text>
      </TouchableOpacity>
      <TestScreen
      visible={modelVisible}
      close={()=> setModelVisible(false)}
      />
    </View>
  );
};

export default ModalTest;

const styles = StyleSheet.create({});
