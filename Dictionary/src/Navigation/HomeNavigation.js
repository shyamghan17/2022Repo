import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as CONSTANT from "../Constant/NavigationString";
import ResultScreen from "../Screen/ResultScreen";
import SearchScreen from "../Screen/SearchScreen";
import SignIn from "../Authuntacition/SignIn";
import SignUp from "../Authuntacition/SignUp";
import News from "../Screen/News";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name={CONSTANT.Result} component={ResultScreen} />
//       <Drawer.Screen name={CONSTANT.Search} component={SearchScreen} />
//     </Drawer.Navigator>
//   );
// }

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={CONSTANT.Home}>
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
