import React, {
  useEffect,
  useState,
  createContext,
  useReducer,
} from "react";
 import AsyncStorage from "@react-native-async-storage/async-storage";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const cartItems = JSON.stringify(cart)

  setItemStorage = async () => {
        try {
          await AsyncStorage.setItem("name", cartItems);
        } catch (error) {
          console.log("adding data error");
        }
      };
    
      getItemStorage = async () => {
        try {
          const value = await AsyncStorage.getItem('name');
          if (value !== null) {
            setCart(JSON.parse(value))
          }
        } catch (error) {
          console.log("reading data error");
        }
      };
      useEffect(() => {
        this.getItemStorage();
      }, []);


      removeItemStorage = async () => {
        try {
          await AsyncStorage.setItem("name", cartItems);
        } catch (error) {
          console.log("adding data error");
        }
      };


      const completeTask =(item)=>{
        let itemsCopy = [...cart];
        itemsCopy.splice(item, 1);
        setCart(itemsCopy)
        this.setItemStorage()

      }

  return (
    <DataContext.Provider value={{ cart, setCart, setItemStorage, completeTask }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
