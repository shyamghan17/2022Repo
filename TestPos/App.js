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
  const [cart, setCart] = React.useState(
    [
        {
          items: [
            {
              category: "Drinks",
              id: 145,
              item: "Batida de Coco",
              price: 1.9,
              quantity: 0,
            },
            {
              category: "Pasta",
              id: 285,
              item: "Beef-Carne",
              price: 6.9,
              quantity: 0,
            },
      
            {
              category: "Arriba- Spezialitäten",
              id: 254,
              item: "200g** Bistec Ranchero",
              price: 13.9,
              quantity: 0,
            },
          ],
          orderNumber: 1023,
          tableNum: "Table 10",
        },
        {
          items: [
            {
              category: "Getränke-Hot Drinks",
              id: 316,
              item: "BIO GRÜNTEE JASMIN Blatt",
              price: 2.9,
              quantity: 0,
            },
            {
              category: "Pescado-Fischgerichte",
              id: 299,
              item: " Salmone California",
              price: 13.5,
              quantity: 0,
            },
          ],
          orderNumber: 3351,
          tableNum: "Table 2",
        },
  ]);
  const [table, setTable] = React.useState("Table 2");
  const [selectedProduct, setSelectedProduct] = React.useState();

  // React.useEffect(() => {
  //   if (table) {
  //     const selectedTableData = cart.filter((item) => item.tableNum === table);
  //     setCart(selectedTableData?.[0].items);
  //   }
  // }, [table, selectedProduct]);

  const RenderItems = ({ item }) => {
       const ItemsToAdd = {
         id: item.id,
         item: item.name,
         category: item.Category,
         price: item.price
       }
    //    console.log('Item to add',ItemsToAdd);
    const AddItemsInTheCart = ()=> {
        let addedItems = cart;
      if(table){
        let foundIndex = cart?.findIndex((X)=> X.tableNum === table)
        console.log(foundIndex,'foundIndex');
        // console.log(addedItems[foundIndex].items,'addedItems[foundIndex].items before');
        addedItems[foundIndex].items.push(ItemsToAdd);
        // console.log(addedItems,'addedItems after');
        setCart( addedItems)
    
        // setCart([...cart, addedItems])
        // setCart(addedItems[foundIndex].items.push({
        //     ...cart,
        //     ItemsToAdd
        // }))
        // console.log( addedItems[foundIndex].items,' addedItems[foundIndex].items after');
    }

  }

//   console.log(cart,'cart');
    

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
        renderItem={RenderItems}
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
