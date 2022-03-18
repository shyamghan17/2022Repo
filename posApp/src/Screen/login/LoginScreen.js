import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import InputText from "../../Component/InputText";
import Spacer from "../../Component/Spacer";
import ButtonComponent from "../../Component/ButtonComponent";
import * as COLOR from "../../Component/Colors";
import NavigationText from "../../Component/NavigationText";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={styles.text}>Login</Text>

      <Text
        style={{
          alignSelf: "center"
        }}
      >
        Sign in to continue!
      </Text>
      <Spacer />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../../Images/chelany.png")}
        />
        <Spacer />

        <InputText label="Email" placeholder="Enter your email" />
        <Spacer />
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <InputText
            icon="visibility"
            label="Password"
            placeholder="Enter your password"
          />
        </View>
      </View>
      <Spacer />
      <ButtonComponent label="Login" />

      <Spacer />
      <NavigationText
        onPress={() =>navigation.navigate('Sign Up')}
        text="Dont have account please register here"
      />
      <Spacer />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: "space-between"
  },
  text: {
    fontSize: 50,
    fontWeight: "500",
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3
  },
  image: {
    height: 100,
    width: 100
  }
});
