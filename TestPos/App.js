import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import * as MENU from "./src/data/ItemList";
import * as CART from "./src/data/TablesList";

const App = () => {
  const [cart, setCart] = React.useState(CART.TablesList);
  const [table, setTable] = React.useState("Table 2");
  const [selectedProduct, setSelectedProduct] = React.useState();

  // React.useEffect(() => {
  //   if (table) {
  //     const selectedTableData = cart.filter((item) => item.tableNum === table);
  //     setCart(selectedTableData?.[0].items);
  //   }
  // }, [table, selectedProduct]);

  const AddItemsInTheCart = ({ item }) => {
    const result = cart.findIndex((object) => {
      return object.tableNum === table;
    });
    let addedItems = cart[result].items.push(item);
    setCart(addedItems);
    console.log(cart, "itemInCart");

    return (
      <TouchableOpacity onPress={AddItemsInTheCart}>
        <Text
          style={{
            borderRadius: 10,
            borderColor: "#0ff",
            borderWidth: 1,
            margin: 3,
            padding: 3,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => {
    let items = [];
    if (item.items) {
      items = item.items.map((row) => {
        return (
          <TouchableOpacity>
            <Text
              style={{
                borderRadius: 10,
                borderColor: "#f0f",
                borderWidth: 1,
                margin: 2,
                padding: 5,
              }}
            >
              {row.item}
            </Text>
          </TouchableOpacity>
        );
      });
    }

    return (
      <View
        style={{
          borderRadius: 10,
          borderColor: "#00f",
          borderWidth: 3,
          margin: 10,
          padding: 3,
        }}
      >
        <Text
          style={{
            borderRadius: 10,
            borderColor: "#0ff",
            borderWidth: 1,
            margin: 3,
            padding: 3,
          }}
        >
          {item.tableNum}
        </Text>
        {items}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.table}
      />
      {table ? (
        <Text
          style={{
            borderRadius: 10,
            borderColor: "#d0d",
            borderWidth: 1,
            margin: 3,
            padding: 3,
          }}
        >
          {table}
        </Text>
      ) : null}
      <FlatList
        horizontal={true}
        data={cart}
        keyExtractor={(index) => index.tableNum}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setTable(item.tableNum)}>
            <Text
              style={{
                borderRadius: 10,
                borderColor: "#0ff",
                borderWidth: 1,
                marginHorizontal: 50,
                padding: 3,
              }}
            >
              {item.tableNum}
            </Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={MENU.ItemList}
        keyExtractor={(item) => item.name}
        renderItem={AddItemsInTheCart}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#caa",
  },
});
