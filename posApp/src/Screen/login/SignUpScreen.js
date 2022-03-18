import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../Component/InputText";
import Spacer from "../../Component/Spacer";
import ButtonComponent from "../../Component/ButtonComponent";
import * as COLOR from "../../Component/Colors";
import NavigationText from "../../Component/NavigationText";

const SignUpScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Spacer />
      <Text style={styles.text}>Sign Up</Text>
      <Text>Sign up to continue!</Text>
      <View>
        <InputText label="First Name" placeholder="Name" />
        <Spacer />
        <InputText label="Family Name" placeholder="Sure Name" />
        <Spacer />

        <InputText label="Email" placeholder="Enter your email" />
        <Spacer />

        <InputText label="Password" placeholder="Enter your Password" />
        <Spacer />
        <InputText
          icon="visibility"
          label="Confirm Password"
          placeholder="Confirm your Password"
        />
      </View>
      <ButtonComponent label="Sign Up" />
      <Spacer />
      <NavigationText onPress={()=> navigation.navigate('Login')} text="Already  have account please Login here" />
      <Spacer />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: "500",
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3
  }
});
