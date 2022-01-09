import React from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity} from "react-native";
import dictionary from "../Api/dictionary";



const ResultShow = ({title, results, navigation})=>{


    const getResult = async(id)=>{
        const response= await dictionary.get(`/${id}`)
        setResult(response.data)
 
     } 
 
     useEffect(()=>{
         getResult(id)
     }, [])
 
     if (!result){
     return null
     }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:15,
    marginBottom:5,
}
})
export default ResultShow