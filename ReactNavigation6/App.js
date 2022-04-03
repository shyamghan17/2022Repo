import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#20315f" }}>
          App
        </Text>
      </View>



      <TouchableOpacity
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#AD40AF",
          padding: 20,
          borderRadius: 5
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            fontWeight: "bold"
            // fontFamily: "Inter_900Black"
          }}
        >
          Let's Begin
        </Text>
        <Image />
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App


