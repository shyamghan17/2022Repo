import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/Navigation/HomeNavigation";
import "react-native-gesture-handler";

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default App;
