import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useContext, useCallback } from "react";
import NewsCard from "../components/NewsCard";
import DataContext from "../context/DataContext";
import { useFocusEffect, StackActions } from "@react-navigation/native";
import * as CONSTANT from '../Constant/Constant'

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

  return (
    <SafeAreaView>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return (
            // <ParallaxScrollView>
            <TouchableOpacity
            onPress={()=>  navigation.dispatch(StackActions.push(CONSTANT.DETAILVIEW, {item}))}
            >
              <NewsCard
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
