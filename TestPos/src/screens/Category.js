import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState, useContext } from "react";
import * as CATEGORY from "../data/CategeoryList";
import * as MENU from "../data/ItemList";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "../components/styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Category = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.POS);
  const [table, setSable] = useState(state.selectedTable)
  const [category, setCategory] = useState("All");
  const [dataList, setDataList] = useState(MENU.ItemList);



  const setStatusFilter = (category) => {
    if (category !== "All") {
      setDataList([
        ...MENU.ItemList.filter((elements) => elements.Category === category),
      ]);
    } else {
      setDataList(MENU.ItemList);
    }
    setCategory(category);
  };

  const newArray = CATEGORY.CategoriesList;
  const sortedArray = newArray.sort(
    (a, b) => a.Category.toLowerCase() > b.Category.toLowerCase()
  );

  const sordedDataList = dataList.sort(
    (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
  );
  // Category list render Component
  const renderCatagory = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => setStatusFilter(item.Category)}
      >
        <View style={styles.cateItems}>
          <Text style={styles.listText}>{item.Category}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  // Menu list render Component
  const renderItem = ({ item, index }) => {
    const OrderItems = {
      quantity: 1,
      item: item.id,
      name: item.name,
      category: item.Category,
      price: item.price,
      id: Math.floor(Date.now()),
    };

    const setCart = () => {
      const cart = [...state.cart, OrderItems];
      dispatch({ type: "ADD_CART_ITEMS", payload: cart });
    };
    return (
      <TouchableOpacity key={item.id} onPress={() => setCart(OrderItems)}>
        <View style={styles.itemList}>
          <Text style={styles.textColorWhite}>{item.name}</Text>

          <Text style={styles.textColorWhite}>$: {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const goToCart = () => {
    navigation.navigate("Cart");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CCE3DE" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../images/back.png")}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Categories:</Text>

        {table ? <Text style={styles.headerText}>{table}</Text> : null}
        <TouchableOpacity onPress={goToCart}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../images/forward.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.catList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={sortedArray}
          keyExtractor={(item) => item.id}
          renderItem={renderCatagory}
          horizontal={true}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sordedDataList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;
