import { Modal, StyleSheet, SafeAreaView, Text, View, Dimensions, Image, ScrollView } from "react-native";
import React, { useState } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const DetailView = ({ route, navigation }) => {
  
  const { item } = route.params;
  
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.cardView} >
      <Text style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.author}>
        {item.author}
      </Text>
      <Text style={styles.description}>
        {item.description}
      </Text>
      <Image style={styles.image} source={require('../../assets/51BpyaddPoL.jpeg')}/>

      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.dateTime}>{item.publishedAt}</Text>

    </View>
      </ScrollView>
    
    </SafeAreaView>
  );
};

export default DetailView;

const styles = StyleSheet.create({
    cardView: {
 
        margin: width * 0.02,
        backgroundColor: "#f0f8ff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
      },
      title: {
        fontSize: 18,
        margin: 8,
        fontWeight: "bold",
        padding:8,
      },
      author: {
        fontSize: 13,
        margin: 8,
        color: "#000000"
      },
      description: {
        fontSize: 15,
        margin: 8,
        color: "#000000"
      },
      image: {

        margin: 1.5,
        borderRadius:8,
        height: height/2, 
        width: width,
      },
      content: {
        fontSize: 15,
        margin: 8,
        color: "#000000"
      },
      dateTime: {
        fontSize: 15,
        margin: 8,
        color: "#000000"
      },
});
