import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Alert, FlatList } from "react-native";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import NewsCard from "../components/NewsCard";

const Technology = ({navigation}) => {

  const  news  = useContext(DataContext);
  


  return (
    <SafeAreaView>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("detail", { item })}
            >
              <NewsCard
                title={item.title}
                description={item.description}
                author={item.author}
                image={item.urlToImage}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Technology;

const styles = StyleSheet.create({});
