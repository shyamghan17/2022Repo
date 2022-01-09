import React from 'react'

import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'


const SearchBar =({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}> 
        <Text>press</Text>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#f0e1ea',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginVertical:10,
        flexDirection:'row',

    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15,
    }
})
export default SearchBar