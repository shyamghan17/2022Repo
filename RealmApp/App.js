import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/homeScreen/homeScreen';
import ComponentsScreen from './src/componentScreen/componentScreen';
import ListScreen from './src/ListScreen';
import ImageScreen from './src/ImageScreen/ImageScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';


const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='home'>
        <Tab.Screen name='home' component={BoxScreen}/>
        <Tab.Screen name='Component' component={ComponentsScreen}/>
        <Tab.Screen name='FlatList' component={ListScreen}/>
        <Tab.Screen name= 'Images' component={ImageScreen}/>

      </Tab.Navigator>
      
      </NavigationContainer>
  );
}