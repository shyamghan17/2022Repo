import { Modal, StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const DetailView = ({ route, navigation }) => {
  
  const { item } = route.params;
  return (
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
      <Image style={styles.image} source={{uri:item.urlToImage} }/>

      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.dateTime}>{item.publishedAt}</Text>

    </View>
  );
};

export default DetailView;

const styles = StyleSheet.create({
    cardView: {
        margin: width * 0.02,
        backgroundColor: "white",
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
        color: "#232323"
      },
      description: {
        fontSize: 15,
        margin: 8,
        color: "#232323"
      },
      image: {
        height: height / 4,
        margin: 1.5,
        borderRadius:8
      },
      content: {
        fontSize: 15,
        margin: 8,
        color: "#232323"
      },
      dateTime: {
        fontSize: 15,
        margin: 8,
        color: "#232323"
      },
});
