import React, { useEffect, useState, createContext, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState();
  const [dataList, setDataList] = useState([]);
  const [OrderItems, setOrderItems] = useState([])

  const cartItems = JSON.stringify(cart);

  setCartItems = async () => {
    try {
      await AsyncStorage.setItem("cartItems", cartItems);
    } catch (error) {
      console.log("adding data error");
    }
  };

  const getItemStorage = async () => {
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
    getItemStorage();
  }, []);
  
  const completeTask = (id) => {
    // let dataCart = cart
    setCart(cart.filter(x => x.id != id))
    this.setCartItems()
  };


  // const completeTask = (cart, item)=>{
  //   let newArray= [cart]
  //   newArray.splice(item.id, 1)
  //   return setCart(newArray)
  // }

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        setCartItems,
        completeTask,
        table,
        setTable,
        dataList,
        setDataList,
        setOrderItems,
        OrderItems
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
