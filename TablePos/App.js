import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./src/stackNavigation/StackScreen";
import { DataProvider } from "./src/Global/DataContex";
import { useFonts } from "expo-font";
const App = () => {
  let [fontsLoaded] = useFonts({
    BreeSerif: require("./assets/fonts/BreeSerif-Regular.ttf"),
    DidactGothic: require("./assets/fonts/DidactGothic-Regular.ttf"),
    SquarePeg: require("./assets/fonts/SquarePeg-Regular.ttf"),
    IndieFlower: require("./assets/fonts/IndieFlower-Regular.ttf"),
    Caveat: require("./assets/fonts/Caveat-VariableFont_wght.ttf"),
    Hujan: require("./assets/fonts/Hujan.ttf"),
    orange: require("./assets/fonts/orange.ttf"),
    Cafe: require("./assets/fonts/Cafe.ttf"),

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DataProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
