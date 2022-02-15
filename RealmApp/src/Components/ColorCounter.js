import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

const ColorCounter =({title, label, color, onIncrease, onDecrease})=>{
    return (
        <View>
            <Text>{color}</Text>
            <TouchableOpacity  onPress={()=> onIncrease()}>
                <Text>{`Increase ${color}`} </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> onDecrease()}>
                <Text>{`Decrease ${color}`}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    
})
export default ColorCounter