import React, { useContext, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import AuthForm from "../components/AuthForm";
import * as CONSTANT from "../constant/Constant";
import { Context as AuthContext } from "../context/authContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin, tryLocalSignin } = useContext(AuthContext);

  useEffect(()=>{
    tryLocalSignin()
  }, [])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage={state.errorMessage}
        submitText="Sign In"
        onSubmit={signin}
      />

      <TouchableOpacity onPress={() => navigation.navigate(CONSTANT.SIGNUP)}>
        <Text> Dont have a account? sign up Instade </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SigninScreen;
