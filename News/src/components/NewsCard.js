import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator
} from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const NewsCard = ({ title, author, description, image }) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.author}>
        {author}
      </Text>
      {image == null
        ? <ActivityIndicator />
        : <Image style={styles.image} source={{ uri: image }} />}
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

export default NewsCard;

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
    padding: 8
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
    borderRadius: 8
  }
});
