import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { styles } from "../components/styles";
import DataContext from "../Global/DataContex";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const CartScreen = ({ navigation }) => {
  const { table, cart, completeTask, setTable } = useContext(DataContext);
  const [dataList, setDataList] = useState([]);

  const setStatusFilter = () => {
    // let addedItems = cart;
    if (table) {
      let foundIndex = cart?.findIndex((X) => X.tableNum === table);
      console.log(foundIndex, "foundIndex");
      setDataList(cart[foundIndex].items);
    }
  };

  // console.log(dataList, 'DataList ');

  let total = dataList.reduce((currentTotal, item) => {
    return item.price + currentTotal;
  }, 0);
  let totalPrice = total.toFixed(2);

  const renderCatagory = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setTable(item.tableNum);

          setStatusFilter();
        }}
      >
        <View style={styles.cateItems}>
          <Text style={styles.listText}>{item.tableNum}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemList}>
        <View>
          <Text style={styles.textColorWhite}>{item.item}</Text>
          <Text style={styles.textColorWhite}>$: {item.price}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding:5
          }}
        >
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <Ionicons
              name="ios-remove-circle-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.textColorWhite}>{item.quantity}</Text>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <Ionicons name="add-circle-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginHorizontal: 5 }}
            onPress={() => {
              completeTask(item.id);
            }}
          >
            <AntDesign name="delete" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CCE3DE" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerText}>
          {table} : ${totalPrice}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Print")}>
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.catList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={cart}
          keyExtractor={(item, index) => index.toString()}
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
          data={dataList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
