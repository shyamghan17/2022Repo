import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigator from "./src/navigation/Navigator";
import { DataProvider } from "./src/context/DataContex";

const App = () => {


  return (
<DataProvider>
<Navigator/>
</DataProvider>


  );
};

export default App;

const styles = StyleSheet.create({});
