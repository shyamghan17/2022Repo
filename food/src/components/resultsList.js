import React from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity} from "react-native";
import ResultsDetails from "./resultsDetails";


const ResultList = ({title, results, navigation})=>{
    if(!results.length){
        return null
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={results}
            keyExtractor={(results)=>results.id}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={()=>navigation.push('ResultShow', item)}>
                <ResultsDetails results={item}  />
                </TouchableOpacity>)
                }}
            />
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
export default ResultList