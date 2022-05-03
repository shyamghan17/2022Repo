import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
import DataContext from "../context/table-context";

const HomeScreen = () => {
  const [todo, setTodo] = useState("");
  const { addTodo, toggleTodo, deleteTodo } = useContext(DataContext);

  const newTodo = {
    id: Math.random(),
    text: todo,
    complete: false,
  };
  addTodo(newTodo);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"#232323"} />
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>ToDoS</Text>
        <TextInput
          style={{ margin: 5, padding: 5, fontSize: 20 }}
          onChangeText={(text) => setTodo(text)}
          placeholder="please enter your mgs"
        ></TextInput>

        <Text>{todo}</Text>

        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Delete Todo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Toggle Todo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
