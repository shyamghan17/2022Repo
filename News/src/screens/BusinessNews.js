import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  View,
  Text
} from "react-native";
import React, { useContext, useCallback, useState } from "react";
import NewsCard from "../components/NewsCard";
import DataContext from "../context/DataContext";
import { useFocusEffect, StackActions } from "@react-navigation/native";
import TestScreen from "./TestScreen";
import * as CONSTANT from '../Constant/Constant'

const BusinessNews = ({ navigation }) => {
  const { news, setHeadings, getBusinessNewsFromApi } = useContext(DataContext);
  //  const [modal , setModal ] = useState(false)

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  useFocusEffect(
    useCallback(() => {
      setHeadings(
        "everything?domains=wsj.com&apiKey=860b85233a5f46a9a2b3b256b5f708e1"
      );
      getBusinessNewsFromApi()
      // console.log("focused effect");
      // Do something when the screen is focused
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>


      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>  navigation.navigate(CONSTANT.DETAILVIEW, {item})}>
              <NewsCard
                title='Manisha'
                description='I Love You'
                author='Love you Baby'
                image ={require('../../assets/51BpyaddPoL.jpeg')}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default BusinessNews;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#032000"
  }
});