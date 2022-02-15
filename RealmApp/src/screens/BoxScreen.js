import React, {useState} from "react";
import { Text, View, Button, StyleSheet, TextInput} from 'react-native'


const BoxScreen =({navigation})=>{

    return (
    
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>This is box screen 1</Text>
        <Text style={styles.textStyle}>This is box screen 2</Text>
        <Text style={styles.textStyle}>This is box screen 3</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor:'black',
        flexDirection:'column',
        alignItems:'center'
    },
    textStyle:{
        borderWidth:1,
        borderColor:'red',
        padding:10,
        margin:10,

       
    }
})
export default BoxScreen