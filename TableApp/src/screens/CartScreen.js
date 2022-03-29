import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import React, { useContext } from "react";
import Title from "../components/Title";
import { styles } from "../components/styles";
import DataContext from "../Global/DataContex";

const CartScreen = ({ navigation, route }) => {
  const { table, cart, completeTask } = useContext(DataContext);

  console.log(cart, "form cart page 1");

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemList}>
        <View>
          <Text style={styles.textColorWhite}>
            {item.name}
          </Text>
          <Text style={styles.textColorWhite}>
            $: {item.price}
          </Text>
        </View>

        <TouchableOpacity key={item} onPress={() =>completeTask(item)}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../images/delete.png")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            style={styles.imageStyle}
            source={require("../images/back.png")}
          />
        </TouchableOpacity>

        <Title title={"Cart"} />
        {table ? <Title title={table} /> : null}
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={item => item}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CartScreen;
