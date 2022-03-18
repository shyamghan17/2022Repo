import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native";
import * as COLOR from "./Colors";
import Spacer from "./Spacer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ButtonComponent = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{margin:5}}>
      <View style={styles.container}>
        {/* <ActivityIndicator /> */}
        <Text style={styles.txt}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: "center",
    flexDirection:'row',
    backgroundColor: COLOR.IconClo,
    borderRadius: 10,
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3,
    width: windowWidth - 50,
    height: windowHeight * 0.08
  },

  bttn: {
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3
  },
  txt: {
    fontSize: 18,
    fontWeight: "500",
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3,



  }
});
