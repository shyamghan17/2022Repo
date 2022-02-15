import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/Screen/IndexScreen";
import ShowScreen from "./src/Screen/ShowScreen";
import EditScreen from "./src/Screen/EditScreen";
import CreateScreen from "./src/Screen/CreateScreen";
import { Provider } from "./src/Context/BlogContext";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="IndexScreen">
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}

          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateScreen")}
              >
                <Feather name="plus" size={25} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}

        />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
};
export default App;
