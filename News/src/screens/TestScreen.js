import { StyleSheet, Text, View, Modal, TouchableOpacity,SafeAreaView } from "react-native";
import React, { useState } from "react";

const TestScreen = ({ visible, close, item }) => {
  return (
    <SafeAreaView>

      <Modal animationType="fade" visible={visible} onRequestClose={() => {}} >
        
        <View style={{ backgroundColor:'red', flex:1 }}>
          <Text>hello this is form modal</Text>
          <Text>
           Hello World
          </Text>
          <TouchableOpacity onPress={() => close()}>
            <Text>press me to close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TestScreen;
