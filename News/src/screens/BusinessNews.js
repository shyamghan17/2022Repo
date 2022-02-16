import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  Animated
} from "react-native";
import React, { useContext } from "react";
import NewsCard from "../components/NewsCard";
import DataContext from "../context/DataContext";

const BusinessNews = ({ navigation }) => {

  const news = useContext(DataContext);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
     
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
        
          return (
            <TouchableOpacity>
              <NewsCard
                title={item.title}
                description={item.description}
                author={item.author}
                image={item.urlToImage}
              />
              {/* <TestScreen
                visible={modelVisible}
                close={setModelVisible(false)}
                item={modalData}
              /> */}
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default BusinessNews;

const styles = StyleSheet.create({
  safeAreaView:{
    flex:1,
    backgroundColor:'#032000'
  }
});
