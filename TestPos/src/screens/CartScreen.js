import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { styles } from "../components/styles";
import Total from "../components/Total";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = ({ navigation }) => {
  const TABLE = useSelector((state) => state.POS);

  const cart = TABLE.cart;
  const [dataList, setDataList] = useState(TABLE.cart);
  const [table, setTable] = useState(TABLE.selectedTable);

  const setStatusFilter = (table) => {
    if (table !== "") {
      setDataList(cart.filter((elements) => elements.table === table));
    }
  };

  const newArray = [];
  cart.forEach((obj) => {
    if (!newArray.some((o) => o.table === obj.table)) {
      newArray.push({ ...obj });
    }
  });

  const sortedArray = newArray.sort(
    (a, b) => a.table.toLowerCase() > b.table.toLowerCase()
  );

  // const sordedDataList = dataList.sort(
  //   (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
  // );

  // let total = dataList.reduce((currentTotal, item)=>{
  //   return item.price + currentTotal
  // }, 0)

  // console.log(total);

  // useEffect(
  //   () => {
  //     setStatusFilter(table);
  //   },
  //   [cart]
  // );
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
          <Text style={styles.textColorBlack}>{item.table}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.buttTopNav}>
          <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <Image
              style={styles.imageStyle}
              source={require("../images/back.png")}
            />
          </TouchableOpacity>

          {/* <Total total={total}/> */}
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
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.itemList}>
              <View>
                <Text style={styles.textColorWhite}>{item.name}</Text>
                <Text style={styles.textColorWhite}>$: {item.price}</Text>
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
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
