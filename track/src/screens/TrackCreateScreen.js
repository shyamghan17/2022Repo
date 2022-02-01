// import "../screens/_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Context as LocationContext } from "../context/locationContext";
import Map from "./Map";
import useLocation from "../hooks/useLocation";


const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Track Create Screen</Text>
      <Map />
      {err ? <Text>Please enable location Sercices </Text> : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TrackCreateScreen;
