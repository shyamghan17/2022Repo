import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const TestScreen = ({ visible, close, item }) => {
  return (
    <View style={{ marginTop: 100 }}>
      <Text> thisis test screen </Text>

      <Modal animationType="fade" visible={visible} onRequestClose={() => {}}>
        <View style={{ marginTop: 100 }}>
          <Text>hello this is form modal</Text>
          <Text>
            {/* {item.article} */}
          </Text>
          <TouchableOpacity onPress={() => close()}>
            <Text>press me</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default TestScreen;
