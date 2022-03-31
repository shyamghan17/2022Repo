import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { styles } from "../components/styles";
import DataContext from "../Global/DataContex";

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
    if (table !== '') {
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

  const sordedDataList = dataList.sort(
    (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
  );
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
        <View style={[styles.cateItems, styles.shadowForAll]}>
          <Text style={styles.textColorBlack}>
            {item.table}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            style={styles.imageStyle}
            source={require("../images/back.png")}
          />
        </TouchableOpacity>

        <Title title={"Cart"} />
        {table ? <Title title={table} /> : null}
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
                $: {item.price}
              </Text>
              <Text style={styles.textColorWhite}>
                $: {item.table}
              </Text>
            </View>

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
          </View>}
      />
    </View>
  );
};

export default CartScreen;
