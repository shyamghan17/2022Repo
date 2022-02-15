import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { createContext, useEffect, useState } from "react";

import DataContex from "../context/DataContex";
const HomeScreen = () => {
 const album = createContext(DataContex)
 console.log(album,'albums')

 const renderAlbums =()=>{
     album(album=>album.title)
 }

  return (
    <SafeAreaView>
      <Text>home </Text>
      <Text style={{color:'black'}}>{renderAlbums}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
