import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../Component/Title";
import Spacer from "../Component/Spacer";
import ButtonComponent from "../Component/ButtonComponent";
import * as COLOR from "../Component/Colors";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        {/* <Spacer/> */}
      <Title title={'QUiziller'} />
      <View style={styles.bannerContainer}>
        <Image
          source={require("../Images/Students.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <ButtonComponent label={'START'} onPress={()=>navigation.navigate("Quiz")}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding:12,
    height:'100%',
    paddingHorizontal:20,
    paddingTop:40,
    paddingBottom:30,
    backgroundColor:COLOR.HOME_BACKGROUND

  },
  banner: {
    height: 450,
    width: 450
  },
  bannerContainer: {
      flex:1,
    justifyContent: "center",
    alignItems: "center"
  }
});
