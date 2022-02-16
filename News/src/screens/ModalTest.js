import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import React, {useState} from "react";
import TestScreen from "./TestScreen";

const ModalTest = () => {
  const [modelVisible, setModelVisible] = useState(false);

  return (
    <SafeAreaView >

      <TouchableOpacity onPress={()=> setModelVisible(true)}>
        <Text>press me to seee modal </Text>
      </TouchableOpacity>
      <TestScreen
      visible={modelVisible}
      close={()=> setModelVisible(false)}
      />
    </SafeAreaView>
  );
};

export default ModalTest;

const styles = StyleSheet.create({});
