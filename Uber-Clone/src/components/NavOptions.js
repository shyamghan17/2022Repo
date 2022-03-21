import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";


const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https://img.icons8.com/doodle/96/000000/car--v1.png",
    screen: "MapScreen"
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://img.icons8.com/office/80/000000/kawaii-french-fries.png",
    screen: "EatsScreen"
  }
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <TouchableOpacity
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View >
            <Image
              style={{ height: 120, width: 120, borderRadius: 10 }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems:'center'
    }
  });
   