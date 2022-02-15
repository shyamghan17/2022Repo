import React, {useState} from "react";
import { Text, View, Button, StyleSheet, TextInput} from 'react-native'
import InputComponent from "../Components/Input";


const TextScreen =({navigation})=>{
const [name, setName ] = useState('')

    return (
    
    <View>
        <Text>Enter your name</Text>
        <InputComponent
        value={name}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={newValue => setName(newValue)}
        
        />

        <Text>my name is {name}</Text>
        {name.length < 5 ? <Text>Password must be 5 character</Text> : null}
        </View>
    )
}
export default TextScreen