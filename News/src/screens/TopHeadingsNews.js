import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useCallback } from "react";
import NewsCard from "../components/NewsCard";
import DataContext from "../context/DataContext";
import { useFocusEffect, StackActions } from "@react-navigation/native";
import * as CONSTANT from "../Constant/Constant";

const TopHeadings = ({ navigation }) => {
  const { news, setHeadings, getBusinessNewsFromApi } = useContext(DataContext);

  useFocusEffect(
    useCallback(() => {
      setHeadings(
        "top-headlines?country=us&category=business&apiKey=860b85233a5f46a9a2b3b256b5f708e1"
      );
      getBusinessNewsFromApi();
      // Do something when the screen is focused
    }, [])
  );
  const itemColor = (index) => {
    return `rgba(5, 157, 205, ${Math.max(1 - index / 10, 0.4)})`;
  };
  const shadowColor = (index) => {
    return `rgba(255, 157, 205, ${Math.max(1 + index / 10, 0.4)})`;
  };
  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollPosition.value = event.contentOffset.y;
    },
  });
  return (
    <SafeAreaView>
      <FlatList
        onScroll={handleScroll}
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item, index }) => {
          return (
            // <ParallaxScrollView>
            <TouchableOpacity>
              <NewsCard
                backgroundColor={itemColor(index)}
                shadowColor={shadowColor(index)}
                title={item.title}
                description={item.description}
                author={item.author}
                image={item.urlToImage}
              />
            </TouchableOpacity>
            // </ParallaxScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TopHeadings;

const styles = StyleSheet.create({});
