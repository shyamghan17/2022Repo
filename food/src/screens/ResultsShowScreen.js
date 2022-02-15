import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList,Text, Image} from "react-native";
import ResultsDetails from "../components/resultsDetails";
import yelp from "../api/yelp";


const ResultShowScreen = ({route})=>{

    const[result, setResult]= useState(null)

    const item = route.params;
    const id = item.id
    // console.log(result, "result is this")

    const getResult = async(id)=>{
       const response= await yelp.get(`/${id}`)
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
            <Text>{result.name}</Text>
            {/* <Text>{result}</Text> */}
            <FlatList 
                data={result.photos}
                keyExtractor={(photo)=> photo}
                renderItem={({ item })=>{
               return (
                   <View>
                       <Image style={styles.image} source={{uri: item}} />
                       <Text>{item.display_address}</Text>

                       </View>
                    )
                }}
            />
         
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
name:{
    fontWeight:'bold'
},
image:{
    width:250,
    height:120,
    borderRadius:4,
    marginBottom:5,
    borderColor:'#006699'

}
})
export default ResultShowScreen