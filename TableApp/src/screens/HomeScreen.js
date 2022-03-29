import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useContext } from "react";
import * as COLOR from "../components/Colors";
import Title from "../components/Title";
import * as TABLE from "../data/TablesList";
import { styles} from "../components/styles";

import DataContext from "../Global/DataContex";
import TableComponent from "../components/TableComponent";
import NavigationComponent from "../components/NavigationComponent";

const HomeScreen = ({ navigation }) => {
  const { setTable, table, setTableNumber } = useContext(DataContext);

  const setTableId = () => {
    setTableNumber(table);
    navigation.navigate("Categories");
  };

  console.log(table);

  return (

      <View style={styles.container}>
    <NavigationComponent
    onPress={() => navigation.navigate("Categories")}
    title={'List of Table'}
    image={require("../images/cart1.png")}
    />
      <View style={{flex:1}}>
      <FlatList
          data={TABLE.TablesList}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => setTable(item)}>
            <TableComponent tableName={item.title}/>
            </TouchableOpacity>}
        />
      </View>
       
      </View>

  );
};

export default HomeScreen;
