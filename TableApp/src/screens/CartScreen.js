import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import React from "react";
import Title from "../components/Title";
import * as COLOR from "../components/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CartScreen = ({ navigation, route }) => {
  const { cart: cart } = route.params;

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View key={item.id} style={styles.itemList}>
          <Text>
            {item.name}
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
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          height: windowHeight * 0.8
        }}
      >
        {cart.map((item, id) =>
          <TouchableOpacity>
            <View key={item.id} style={styles.itemList}>
              <Text>
                {item.name}
              </Text>
              <Text>
                $: {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Print", {item})}>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginBottom: 20,
            marginRight: 20
          }}
        >
          <Image
            style={styles.imageStyle}
            source={require("../images/print.png")}
          />
        </View>
      </TouchableOpacity>
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
  },
  itemList: {
    flexDirection: "row",
    width: windowWidth * 0.8,
    backgroundColor: COLOR.WHITE,
    padding: 14,
    margin: 4,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: COLOR.BORDER_COLOR,
    borderWidth: 1
  }
});
