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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Category = ({ navigation, route }) => {
  const { tableNo: tableNo } = route.params;
  const [category, setCategory] = useState("All");
  const [dataList, setDataList] = useState(MENU.ItemList);
  const [cart, setCart] = useState([])

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




  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={()=>  setCart([...cart,item])}>
        <View key={item.id} style={styles.itemList}>
          <Text>
            {item.name}
          </Text>
          <Text>
            $: {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Title title={"Main Category list"} />
        <Title title={tableNo} />
      </View>

      <View style={styles.categoriesList}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {CATEGORY.CategoriesList.map(elements =>
            <TouchableOpacity
              onPress={() => setStatusFilter(elements.Category)}
            >
              <View  key={elements.id} style={styles.cateContainer}>
                <Text>
                  {elements.Category}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
      <Title title={"Sub Category"} />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: windowHeight * 0.6
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={dataList}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.buttomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.imageStyle}
            source={require("../images/home.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cart", {cart})} >
          <Image
            style={styles.imageStyle}
            source={require("../images/cart1.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  itemList: {
    flexDirection: "row",
    width: windowWidth * 0.8,
    backgroundColor: COLOR.WHITE,
    padding: 14,
    margin: 4,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: COLOR.BORDER_COLOR,
    borderWidth: 1
  },
  cateContainer: {
    backgroundColor: COLOR.WHITE,
    padding: 15,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  categoriesList: {
    backgroundColor: "gray"
  },
  buttomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10
  },
  imageStyle: {
    height: 30,
    width: 30
  }
});
