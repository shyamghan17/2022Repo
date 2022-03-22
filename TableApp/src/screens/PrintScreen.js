import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,

} from "react-native";
import React, {useState} from "react";
import * as CATEGORY from "../data/CategeoryList";
import * as MENU from "../data/ItemList";

import Title from "../components/Title";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



const PrintScreen = ({ navigation, route }) => {
  const item = route.params;
 const [status, setStatus] = useState('MainCourse')
 const [dataList, setDataList] = useState(MENU.ItemList)
 
 const setStatusFilter = status =>{
   if(status !== "MainCourse"){
     setDataList([...MENU.ItemList.filter(e=>e.status === status)])
   }else {
     setDataList(MENU.ItemList)
   }
   setStatus(status)
 }

 console.log(dataList, 'tata slist');

 const renderItem =({item, index})=>{
return(
  <View >
  <Text>{item.name}</Text>
  <Text>{item.price}</Text>


  </View>
)
 }
  return (
    <SafeAreaView>
      <View style={styles.categoriesList}>
      {CATEGORY.CategoriesList.map(e=>(
        <TouchableOpacity
        style={[styles.btn, status === e.status && styles.btnActive]}
        onPress={()=> setStatusFilter(e.status)}>
          <Text>{e.status}</Text>
        </TouchableOpacity>
      ))}
       
      </View>
      <FlatList
      data={dataList}
      keyExtractor={item => item.id}
      renderItem={renderItem}

      />
     
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
  categoriesList:{

  },
  btn:{
    backgroundColor:'red',
  },
  btnActive:{
    backgroundColor:'green'
  }
});
