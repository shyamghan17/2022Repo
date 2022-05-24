import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useContext, useState } from "react";
import Title from "../components/Title";
import * as TABLE from "../data/TablesList";
import { styles } from "../components/styles";

import TableComponent from "../components/TableComponent";
import NavigationComponent from "../components/NavigationComponent";
import { useDispatch, useSelector } from "react-redux";
import { DecreaseCount, IncreaseCount } from "../Global/action";

const HomeScreen = ({ navigation }) => {
  const [table, setTable] = useState("");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.navigationComponent}>
          <Text>List of tables</Text>
          {table ? <Text>{table}</Text> : null}
          {table ? (
            <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
              <Image
                style={styles.imageStyle}
                source={require("../images/forward.png")}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.TableContainer}>
          <FlatList
            data={counter.tableList}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setTable(item.title)}>
                <View>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
