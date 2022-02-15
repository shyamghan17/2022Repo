import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as CONSTANT from "../constant/Constant";

const NavLink = ({ navigation, navText, onPress, routeName }) => {
  return (
    <View>
      <TouchableOpacity onPress={()=> navigation.navigate(CONSTANT.SIGNUP)}>
        <Text style={styles.link}>{navText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default NavLink;
