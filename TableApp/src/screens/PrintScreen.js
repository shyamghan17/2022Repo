import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SectionList
} from "react-native";
import React from "react";
import * as MENU from "../data/ItemList";
import MenuComponent from "../components/MenuComponent";
import Title from "../components/Title";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PrintScreen = ({ navigation, route }) => {
  const item = route.params;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
  return (
    <SafeAreaView>
      <View style={{flexDirection:'column'}}>
        <View>
          <Title title={"Section list"} />
        </View>
        <View style={styles.menuContainer}>
          <Title title={"Ctegories"} />

          <SectionList
         
      sections={MENU.ItemList}
      keyExtractor={(item) => item.id }
      renderItem={({ item }) => <Item title={item.} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
        </View>

        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Print')}>
        <Image
            style={styles.imageStyle}
            source={require("../images/cart.png")}
          />
        </TouchableOpacity>
       
        </View>
      </View>
     
    </SafeAreaView>
  );
};

export default PrintScreen;

const styles = StyleSheet.create({
  menuContainer: {
    justifyContent: "center",
    alignItems: "center",
    height:windowHeight*0.78

  },
  menuView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer:{
justifyContent:"center",
alignItems:'center',

  },
  imageStyle: {
    height: 64,
    width: 64
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
