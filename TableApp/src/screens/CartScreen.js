import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { styles } from "../components/styles";
import DataContext from "../Global/DataContex";
import Ionicons from '@expo/vector-icons/Ionicons';

const CartScreen = ({ navigation }) => {
  const {
    table,
    dataList,
    setDataList,
    cart,
    completeTask,
    setTable
  } = useContext(DataContext);

  const setStatusFilter = table => {
    if (table !== "") {
      setDataList(cart.filter(elements => elements.table === table));
    }
  };

  const newArray = [];
  cart.forEach(obj => {
    if (!newArray.some(o => o.table === obj.table)) {
      newArray.push({ ...obj });
    }
  });

  const sortedArray = newArray.sort(
    (a, b) => a.table.toLowerCase() > b.table.toLowerCase()
  );

  let total = dataList.reduce((currentTotal, item) => {
    return item.price + currentTotal;
  }, 0);
  let totalPrice = total.toFixed(2);

  useEffect(
    () => {
      setStatusFilter(table);
    },
    [cart]
  );
  const renderCatagory = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          setStatusFilter(item.table);
          setTable(item.table);
        }}
      >
        <View style={styles.cateItems}>
          <Text style={styles.textColorBlack}>
            {item.table}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CCE3DE" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../images/back.png")}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>
          {table} : ${totalPrice}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Print")}>
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
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCatagory}
          horizontal={true}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            <View key={index} style={styles.itemList}>
              <View>
                <Text style={styles.textColorWhite}>
                  {item.name}
                </Text>
                <Text style={styles.textColorWhite}>
                  {item.id}
                </Text>
                <Text style={styles.textColorWhite}>
                  $: {item.price}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity>
                <Ionicons name="md-remove-circle" size={24} color="black" /> 
                </TouchableOpacity>
                <Text style={styles.headerText}>
                  {"10"}
                </Text>
                <TouchableOpacity>
                <Ionicons name="add-circle" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    completeTask(item.id);
                  }}
                >
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require("../images/delete.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
