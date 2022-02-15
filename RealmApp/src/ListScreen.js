import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'
import CustomButton from './Components/Button'

const ListScreen =( { navigation }) =>{

    const friends = [
        { name: 'friend 1',
            age: 23},
        { name: 'friend 2', age: 23},
        { name: 'friend 3',age: 24},
        { name: 'friend 4' ,age: 33},
        { name: 'friend 5',age: 25},
        { name: 'friend 6',age: 22},
        { name: 'friend 7',age: 26},
        { name: 'friend 8',age: 27},
        { name: 'friend 9',age: 20},

    ]

    return(
       
        <View>
            <FlatList 
            keyExtractor ={()=>friends.name}
            data={friends} 
            renderItem= {({item})=>{
                return (
                    <View style={styles.flatView}>
                        
                    <Text style={styles.txtStyle}>Name: {item.name}- Age:{item.age}</Text>
                
                    </View>
                    )
            }}></FlatList>


<CustomButton
            title='press me again'
            onPress={()=>navigation.navigate('home')}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    txtStyle:{
       fontSize:20
       
    }, flatView:{
        padding:10,
        marginHorizontal:5,
        marginVertical:10,
        borderRadius:1,
        borderColor:'#232323',
        borderWidth:1
    }

})

export default ListScreen