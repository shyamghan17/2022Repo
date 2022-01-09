
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import * as CONSTANT from '../Constant/NavigationString';
import ResultScreen from '../Screen/ResultScreen';
import SearchScreen from '../Screen/SearchScreen';


const Stack = createNativeStackNavigator();

const HomeNavigation =()=> {
  return (

      <Stack.Navigator initialRouteName={CONSTANT.Search}>
        <Stack.Screen name={CONSTANT.Home} component={HomeScreen} />
        <Stack.Screen name={CONSTANT.Result} component={ResultScreen} />
        <Stack.Screen name={CONSTANT.Search} component={SearchScreen} />

      </Stack.Navigator>

  );
}

export default HomeNavigation;