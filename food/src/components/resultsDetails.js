import React from "react";
import { View, StyleSheet, Text, FlatList, Image} from "react-native";

const ResultsDetails = ({results})=>{



    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:results.image_url}} />
            <Text style={styles.name}>{results.name}</Text>
            <Text>{results.rating} Stars, {results.review_count} Reviews</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
    },
name:{
    fontWeight:'bold'
},
image:{
    width:200,
    height:100,
    borderRadius:4,
    marginBottom:5,

}
})
export default ResultsDetails