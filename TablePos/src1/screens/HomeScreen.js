import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Text
} from "react-native";
import React, { useContext } from "react";
import Title from "../components/Title";
import * as TABLE from "../data/TablesList";
import { styles } from "../components/styles";

import DataContext from "../Global/DataContex";
import TableComponent from "../components/TableComponent";
import NavigationComponent from "../components/NavigationComponent";

const HomeScreen = ({ navigation }) => {
  const { setTable, table, setTableNumber } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <View style={styles.navigationComponent}>
        <Text>List of tables</Text>
        {/* {table
            ? <Text>
                {table}
              </Text>
            : null}
          {table
            ? <TouchableOpacity
                onPress={() => navigation.navigate("Categories")}
              >
                <Image
                  style={styles.imageStyle}
                  source={require("../images/forward.png")}
                />
              </TouchableOpacity>
            : null} */}
      </View>

      {/* <View style={styles.TableContainer}>
          <FlatList
            data={TABLE.TablesList}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => setTable(item.title)}>
                <View>
                  <Text>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>}
          />
        </View> */}
    </View>
  );
};

export default HomeScreen;
