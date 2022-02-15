import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as CONSTANT from "../constant/Constant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackListScreen from "../screens/TrackListScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/authContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const loginfFow = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={CONSTANT.SIGNIN} component={SigninScreen} />
      <Stack.Screen name={CONSTANT.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

const TrackListFlow = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={CONSTANT.TRACKLIST} component={TrackListScreen} />
      <Stack.Screen name={CONSTANT.TRACKDETAIL} component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};
const mainFlow = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        headerShown: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          // position: "absolute",
          borderRadius: 50,
          marginVertical: 5,
          marginHorizontal: 5,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name={CONSTANT.TRACKLISTFLOW}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="go-kart-track"
              size={24}
              color={focused ? "red" : "green"}
            />
          ),
        }}
        component={TrackListFlow}
      />
      <Tab.Screen
        name={CONSTANT.TRACKCREATE}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="md-create-outline"
              size={24}
              color={focused ? "red" : "green"}
            />
          ),
        }}
        component={TrackCreateScreen}
      />
      <Tab.Screen
        name={CONSTANT.ACCOUNT}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={24}
              color={focused ? "red" : "green"}
            />
          ),
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

const Routes = ()  => {
  

  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenListeners={{}}>
        {state.token == null ? (
          <>
            <Stack.Screen
              name="Login"
              component={loginfFow}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MAIN FLOW"
              component={mainFlow}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
