import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform
} from "react-native";


import * as CONSTANT from "../constant/Constant";

function TrackListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Track List Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(CONSTANT.TRACKDETAIL)}
      >
        <Text>press me</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TrackListScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
       backgroundColor:'#ffffd0',
       marginTop: Platform.OS === 'android' ? 25 : 32
    }
});
