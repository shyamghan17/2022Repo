import React, {useReducer} from "react";
import { Text, View, Button, StyleSheet, TextInput} from 'react-native'


//  const [state, dispatch ] = useReducer(reducer, (text=''))
const InputComponent =({navigation, value, autoCapitalize, autoCorrect, onChangeText})=>{
    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <TextInput 
        
            style={styles.textInput} 
            value={value}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            onChangeText={onChangeText}
            

        />
        </View>
    )
}
const styles= StyleSheet.create({
    textInput:{
        borderColor:'black',
        height:50,
        width:'70%',
        borderRadius:8,
        borderWidth:1,
        margin:18,
        paddingLeft:10,
    }
})
export default InputComponent