import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import React from "react";
import Title from "../components/Title";

const CartScreen = ({ navigation, route }) => {
  const  cart  = route.params;

  console.log(cart);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View key={item.id} style={styles.itemList}>
          <Text>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title title={"Cart"} />
        <TouchableOpacity onPress={() => navigation.navigate("Print")}>
          <Image
            style={styles.imageStyle}
            source={require("../images/print.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        {/* <FlatList renderItem={renderItem} /> */}
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  imageStyle: {
    height: 30,
    width: 30
  }
});
