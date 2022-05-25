import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterLignt: require("./src/assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
