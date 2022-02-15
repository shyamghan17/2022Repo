import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({ errorMessage, headerText, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Text h3 style={styles.text}>
        {headerText}
      </Text>
      <Spacer />
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Input
        secureTextEntry
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        title={submitText}
        onPress={() => onSubmit({ email, password })}
        style={styles.button}
      />
      <Spacer />
    </>
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginBottom: 15,
  },
});

export default AuthForm;
