import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");
const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer} />
      <View style={styles.bottomContainer}>
        <View style={styles.buttomIcon}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="repeat" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="share-outline" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={30} color="#888888" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831"
    // alignItems: "center",
    // justifyContent: "center"
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer: {
    width: width,
    alignItems: "center",
    paddingVertical: 15,
    borderTopColor:'#393e46',
    borderWidth:1,
  },
  buttomIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  }
});
