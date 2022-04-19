import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import * as TABLE from "../data/TablesList";
import DataContext from "../Global/DataContex";
import TableComponent from "../components/TableComponent";
import { styles } from "../components/styles";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const { setTable, table, setCart, cart, setCartItems } =
    useContext(DataContext);
    // console.log(table, 'table');

  const goToCart = () => {
    const OrderItem = {
      tableNum: table,
      orderNumber: Math.floor(1000 + Math.random() * 9000),
      items: [],
    };

    if (cart.some((items) => items.tableNum == table)) {
      navigation.navigate("Categories");
      // console.log(cart, "table selected");
    } else {
      setCart([...cart, OrderItem]);
      setCartItems();
      // console.log(cart, "table Added");
      navigation.navigate("Categories");
    }
  };

//   console.log(table, " prder ote,s ");

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#CCE3DE", marginTop: 21 }}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Tables</Text>
        {table ? (
          <Text style={styles.headerText}>Selected: {table}</Text>
        ) : null}
        {table ? (
          <TouchableOpacity onPress={goToCart}>
            <AntDesign name="caretright" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#A4C3B2",
          shadowOffset: { width: -0.1, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 10,
          elevation: 15,
        }}
      >
        <FlatList
          data={TABLE.TablesList}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setTable(item.title)}>
              <TableComponent title={item.title} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
