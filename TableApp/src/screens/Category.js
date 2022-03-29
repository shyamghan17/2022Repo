import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import React, { useState, useContext } from "react";
import * as CATEGORY from "../data/CategeoryList";
import * as MENU from "../data/ItemList";
import * as COLOR from "../components/Colors";
import Title from "../components/Title";
import DataContext from "../Global/DataContex";
import { styles } from "../components/styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Category = ({ navigation, route }) => {
  const { setCart, cart, setCartItems, table } = useContext(DataContext);

  const [category, setCategory] = useState("All");
  const [dataList, setDataList] = useState(MENU.ItemList);

  console.log(table, "tables");
  //categories filtering method

  const setStatusFilter = category => {
    if (category !== "All") {
      setDataList([
        ...MENU.ItemList.filter(elements => elements.Category === category)
      ]);
    } else {
      setDataList(MENU.ItemList);
    }
    setCategory(category);
  };

  // Category list render Component
  const renderCatagory = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => setStatusFilter(item.Category)}
      >
        <View style={[styles.cateItems, styles.shadowForAll]}>
          <Text style={styles.textColorBlack}>
            {item.Category}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  // Menu list render Component
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity key={item.id} onPress={() => setCart([...cart, item])}>
        <View style={styles.itemList}>
        <View>
        <Text style={styles.textColorWhite}>
            {item.name}
          </Text>
          <Text style={styles.textColorWhite}>
            $: {item.price}
          </Text>

        </View>
         
        </View>
      </TouchableOpacity>
    );
  };
  const goToCart = () => {
    navigation.navigate("Cart");
    setCartItems(cart);
  };
  return (

      <View style={styles.container}>

      <View style={{flexDirection:'row'}}>
      <Title title={"Main Category list"} />
        {table? <Title title={table.title}/>: null}

      </View>
      
        <View style={styles.catList}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={CATEGORY.CategoriesList}
            keyExtractor={item => item.id}
            renderItem={renderCatagory}
            horizontal={true}
          />
        </View>
      <FlatList
            showsVerticalScrollIndicator={false}
            data={dataList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />

     
     

        <View style={styles.buttNav}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.imageStyle}
              source={require("../images/back.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={goToCart}>
            <Image
              style={styles.imageStyle}
              source={require("../images/cart1.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

  );
};

export default Category;
