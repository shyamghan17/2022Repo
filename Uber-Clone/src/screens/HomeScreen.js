import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{ uri: "https://img.icons8.com/ios/500/000000/uber.png" }}
          style={styles.image}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain"
  }
});
