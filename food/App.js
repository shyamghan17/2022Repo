import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultShowScreen from './src/screens/ResultsShowScreen';


const  HomeScreen =({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
      onPress={() =>navigation.navigate('Search')}
      ><Text>Press me</Text></TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen 
        name="Search" 
        component={SearchScreen}
        options={{title:'Business Search'}}
        />
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='ResultShow' component={ResultShowScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;