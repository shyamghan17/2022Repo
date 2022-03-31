import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import React, { useState, useContext } from "react";
import * as CATEGORY from "../data/CategeoryList";
import * as MENU from "../data/ItemList";
import Title from "../components/Title";
import DataContext from "../Global/DataContex";
import { styles } from "../components/styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Category = ({ navigation, route }) => {
  const { setCart, cart, setCartItems, table } = useContext(DataContext);

  const [category, setCategory] = useState("All");
  const [dataList, setDataList] = useState(MENU.ItemList);

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
  const newArray =CATEGORY.CategoriesList
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
        <View style={[styles.cateItems, styles.shadowForAll]}>
          <Text style={styles.textColorBlack}>
            {item.Category}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  // Menu list render Component
  const renderItem = ({ item, index }) => {
     const OrderItems = {
       table: table,
       item: item.id,
       name: item.name,
       category: item.Category,
       price: item.price,
       id: Math.floor(Date.now())
     }
    return (
      <TouchableOpacity key={item.id} onPress={() => setCart([...cart, OrderItems])}>
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
    setCartItems(cart);
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Title title={"Main Category list"} />
        {table ? <Title title={table} /> : null}
      </View>

      <View style={styles.catList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={sortedArray}
          keyExtractor={item => item.id}
          renderItem={renderCatagory}
          horizontal={true}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={sordedDataList}
        keyExtractor={(item) => item.id}
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
