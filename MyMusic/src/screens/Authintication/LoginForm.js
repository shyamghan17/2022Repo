import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const LoginForm = ({ navigation }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const LoginUser = () => {
    // setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        onLoginSuccess()
        console.log(userCredential.user, "hello data");
      })
      .catch(error => error("wome thing is worng with login details"));
  };
  const LogOutUser = () => {
    signOut(auth)
      .then(userCredential => {
        setLoading(false);
      })
      .catch(error => alert(error.message));
  };
  const onLoginSuccess = () => {
    setEmail("");
    setPassword("");
    setLoading(true);
  };
  
  const renderButton = () => {
    switch (loading) {
      case true:

        return (
          <Button icon="login" mode="contained" onPress={LogOutUser}>
            Log Out
          </Button>
        );

      case false:
        return (
          <Button icon="login" mode="contained" onPress={LoginUser}>
            Login
          </Button>
        );

      default:
        return <ActivityIndicator size="small" />;
    }
  };
  return (
    <View>
      <Text>LoginForm</Text>

      <TextInput
        label="Email"
        placeholder="Enter your Email"
        value={email}
        autoCapitalize={false}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {renderButton()}

      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text>Already Have a account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
