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
import DataContext from "../Global/DataContex";
import { styles } from "../components/styles";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Category = ({ navigation, route }) => {
  const { setCart, cart, setCartItems, table, OrderItems, setOrderItems } =
    useContext(DataContext);

  // console.log(cart, 'cart items');

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

  //   const  getObjectIndex = (table) =>
  // {
  //     for (i = 0; i < cart.length; i++) {
  //        obj = cart[i];
  //        if (obj.hasOwnProperty('tableNum') && obj.tableNum == table) {
  //           return i;
  //        }
  //     }
  // }
  // Menu list render Component
  const renderItem = ({ item, index }) => {
    const OrderMenu = {
      item: item.name,
      category: item.Category,
      price: item.price,
      quantity: 0,
      id: item.id,
    };

    const AddItemsToTheCart = () => {
      for (i = 0; i < cart.length; i++) {
        obj = cart[i];
        if (obj.hasOwnProperty("tableNum") && obj.tableNum == table) {
          return console.log(1, "iiiiiiiiiiiiiiiiiii");
        }
      }
      //  setCart(cart[i].items.push(OrderMenu))
    };

    console.log(cart, "carts items ");

    return (
      <TouchableOpacity key={item.id} onPress={AddItemsToTheCart}>
        <View style={styles.itemList}>
          <Text style={styles.textColorWhite}>
            {index + 1}: {item.name}
          </Text>

          <Text style={styles.textColorWhite}>$: {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const goToCart = () => {
    setCartItems();
    navigation.navigate("Cart");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CCE3DE" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Categories:</Text>

        {table ? <Text style={styles.headerText}>{table}</Text> : null}
        <TouchableOpacity onPress={goToCart}>
          <AntDesign name="caretright" size={24} color="black" />
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
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;
