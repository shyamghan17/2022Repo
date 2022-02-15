import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../screens/Authintication/LoginForm";
import SignUpForm from "../screens/Authintication/SignUpForm";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      >
        <Stack.Screen  name="Login" component={LoginForm} />
        <Stack.Screen name="Sign Up" component={SignUpForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
