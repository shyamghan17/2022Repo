import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NewsCard from "../Components/newsCard";

const News = () => {
  return (
    <View>
      <Text>News Card</Text>
      <NewsCard />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
