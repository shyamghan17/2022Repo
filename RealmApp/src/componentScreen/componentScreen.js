import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import CustomButton from '../Components/Button'
import CounsterScreeen from '../screens/counterScreen'
import CustomColor from '../screens/customColor'

const ComponentsScreen =({ navigation }) =>{

    const Myname ='Ghanshyam'

    return(
       
        <View>
            <CounsterScreeen/>
            <CustomColor />

            <CustomButton
            title='press me again'
            onPress={()=>navigation.navigate('FlatList')}
            />
        </View>
    )
}

export default ComponentsScreen