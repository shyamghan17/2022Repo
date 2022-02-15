import React from 'react'
import {Text, StyleSheet, View, Alert} from 'react-native'
import CustomButton from '../Components/Button'
import { createStackNavigator } from '@react-navigation/stack';
import TextScreen from '../screens/TextScreen';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen =({ navigation }) =>{

    const Myname ='Ghanshyam'

    return(

       
        <View>
            <Text style={{fontSize:40,}}>
               Home Screen
            </Text>
            <Text style={{fontSize:20}}>My name is {Myname}</Text>

            <CustomButton
            title='press me again'
            onPress={()=>navigation.navigate('Component')}
            />

           
        </View>
    )
}

export default HomeScreen