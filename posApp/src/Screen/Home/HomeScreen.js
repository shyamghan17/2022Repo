import React, { useState } from "react";
import { StyleSheet,SafeAreaView, Text, View, FlatList } from "react-native";
import TableComponent from "../../Component/TableComponent";
import { NumberOfTable } from "../../Constant/Constant";

const HomeScreen = () => {



return(
  <SafeAreaView>
    <View style={styles.container}>

  
    <TableComponent label={'1'}/>
    <TableComponent label={'1'}/>
    <TableComponent label={'1'}/>
    <TableComponent label={'1'}/>
    <TableComponent label={'1'}/>
    <TableComponent label={'1'}/>
    </View>
   
  </SafeAreaView>
)

}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection:'column'

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
