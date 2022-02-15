import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { TextInput, Button } from "react-native-paper";
import { auth } from "./firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegisterUser = () => {
    
      createUserWithEmailAndPassword(auth, email, password)
      .then((response) => { 
       navigation.navigate('Login')
      }).catch(error=> alert(error.message))
  };
  return (
    <View>
      <Text>SignUpForm</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize={false}
      />
      <TextInput
        label="Email"
        value={password}
        autoCapitalize={false}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      <Button
        icon="login"
        mode="contained"
        onPress={RegisterUser}
      >
        Sign Up
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Already Have a account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
