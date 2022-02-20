import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopHeadings from "./src/screens/TopHeadingsNews";
import BusinessNews from "./src/screens/BusinessNews";
import DetailView from "./src/components/DetailView";
import Technology from "./src/screens/Technology";
import { DataProvider } from "./src/context/DataContext";
import * as CONSTANT from './src/Constant/Constant'
import ModalTest from "./src/screens/ModalTest";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const StackTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={CONSTANT.STACK} component={BusinessNews} />
      <Stack.Screen name={CONSTANT.DETAILVIEW}component={DetailView} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name={CONSTANT.BUSINESS} component={StackTab} />
      <Tab.Screen name={CONSTANT.TOPHEADLINES} component={TopHeadings} />
      <Tab.Screen name={CONSTANT.TECHNOLOGIES} component={Technology} />
    </Tab.Navigator>
  );
};
function App() {
  return (
  <>
    <DataProvider>

      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
     

    </DataProvider>
    </>

  // <ModalTest/>
  );
}

export default App;
