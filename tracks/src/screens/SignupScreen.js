import React, { useContext, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import * as CONSTANT from "../constant/Constant";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";



const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText=" Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitText="Sign Up"
        onSubmit={signup}
      />
      <Spacer />
      <TouchableOpacity onPress={() => navigation.navigate(CONSTANT.SIGNIN)}>
        <Text> go to sign in </Text>
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

export default SignupScreen;
