import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './src/Navigation/HomeNavigation';


const  App = () => {
  return (


   <NavigationContainer>
      <HomeNavigation/>
    </NavigationContainer>


  );
}

export default App