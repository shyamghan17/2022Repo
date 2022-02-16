import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useContext } from "react";
import NewsCard from "../components/NewsCard";
import DataContext from "../context/DataContext";


const TopHeadings = ({ navigation }) => {
  const news = useContext(DataContext);

  return (
    <SafeAreaView>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return (
            // <ParallaxScrollView>
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
            // </ParallaxScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TopHeadings;

const styles = StyleSheet.create({});
