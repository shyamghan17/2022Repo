import React, { useEffect, useState, createContext, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState();

  const cartItems = JSON.stringify(cart);

  setCartItems = async () => {
    try {
      await AsyncStorage.setItem("cartItems", cartItems);
    } catch (error) {
      console.log("adding data error");
    }
  };

  getItemStorage = async () => {
    try {
      const cartItems = await AsyncStorage.getItem("cartItems");

      if (cartItems !== null) {
        setCart(JSON.parse(cartItems));
      }
    } catch (error) {
      console.log("reading data error");
    }
  };
  useEffect(() => {
    this.getItemStorage();
  }, []);

  // removeItemStorage = async () => {
  //   try {
  //     await AsyncStorage.setItem("name", cartItems);
  //   } catch (error) {
  //     console.log("adding data error");
  //   }
  // };


  const completeTask = ({ item }) => {
    let itemsCopy = [...cart];
    console.log(itemsCopy, " tiems copy");
    itemsCopy.splice(item, 1);
    setCart(itemsCopy);
    this.setCartItems();
  };

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        setCartItems,
        completeTask,
        table,
        setTable,
        setTableNumber
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
