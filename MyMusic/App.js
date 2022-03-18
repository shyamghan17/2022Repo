import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigator from "./src/navigation/Navigator";
import { DataProvider } from "./src/context/DataContex";
import MusicPlayer from "./src/components/MusicPlayer";

const App = () => {
  return(
    <View style={styles.container}>
     <MusicPlayer />
    </View>
  )
};

export default App;

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#232'

}
});
