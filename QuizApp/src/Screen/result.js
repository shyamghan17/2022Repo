import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ButtonComponent from "../Component/ButtonComponent";
import Spacer from "../Component/Spacer";
import * as COLOR from "../Component/Colors";
import Title from "../Component/Title";


const Result = ({ navigation, route }) => {
  const {score} = route.params
  const resultBanner = score>40 ? require('../Images/Smiley.png') : require('../Images/Circles.png')
  return (
    <View style={styles.container}>

      <View>
       <Title title={'RESULTS'}/>
      </View>
      <View>
       <Title title={score}/>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={resultBanner}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <ButtonComponent
        label={"Home"}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  container: {
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor:COLOR.HOME_BACKGROUND
  }
});
