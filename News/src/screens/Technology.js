import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Alert, FlatList } from "react-native";
import React, { useContext, useCallback } from "react";
import DataContext from "../context/DataContext";
import NewsCard from "../components/NewsCard";
import { useFocusEffect, StackActions } from "@react-navigation/native";
import * as CONSTANT from '../Constant/Constant'

const Technology = ({navigation}) => {
  const {news, setHeadings, getBusinessNewsFromApi } = useContext(DataContext);

   
  useFocusEffect(
    useCallback(() => { 
    
      setHeadings("everything?q=apple&from=2022-02-15&to=2022-02-15&sortBy=popularity&apiKey=860b85233a5f46a9a2b3b256b5f708e1")
      getBusinessNewsFromApi()
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

export default Technology;

const styles = StyleSheet.create({});
