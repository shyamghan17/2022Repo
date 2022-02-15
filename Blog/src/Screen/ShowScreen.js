import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../Context/BlogContext";
import { SimpleLineIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const { item } = route.params;
  console.log(item, "here is props blog post");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditScreen", { item: item })}
      >
        <SimpleLineIcons name="pencil" size={24} color="black" />
      </TouchableOpacity>
      <Text>Id: {item.id}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Content: {item.content}</Text>
      <Text>Content: {JSON.stringify(item)}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
  },
  container: {
    margin: 10,
    alignItems: "center",
  },
});

export default ShowScreen;
