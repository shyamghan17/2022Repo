import React, { useContext, useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import TableComponent from "../components/TableComponent";
import { styles } from "../components/styles";
import { useDispatch, useSelector } from "react-redux";
import * as TABLE_LIST from '../data/TablesList'

const HomeScreen = ({ navigation }) => {
  const state = useSelector((state) => state.POS);
  const [table, setTable] = useState(state.selectTable);
  const dispatch = useDispatch();

  const selectTable = (x) => {
    setTable(x);
    dispatch({ type: "SELECT_TABLE" , payload: x});
  };


  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#CCE3DE", marginTop: 21 }}
    >
      <View style={styles.container}>
        {/* <Text style={styles.headerText}>Selected: {TABLE.selectedTable}</Text> */}
        <Text style={styles.headerText}>Tables</Text>
        {table ? (
          <Text style={styles.headerText}>Selected: {table}</Text>
        ) : null}
        {table ? (
          <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../images/forward.png")}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#A4C3B2",
          shadowOffset: { width: -0.1, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 10,
          elevation: 15,
        }}
      >
        <FlatList
          data={TABLE_LIST.TablesList}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectTable(item.title)}>
              <TableComponent tableName={item.id} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
