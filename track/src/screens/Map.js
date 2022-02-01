import React, { useContext } from "react";
import MapView, { Circle } from "react-native-maps";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Context as LocationContext } from "../context/locationContext";
import { ActivityIndicator } from "react-native";

const Map = () => {
  const {state : currentLocation}  = useContext(LocationContext);

console.log(currentLocation,"current location")
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Map View</Text>
      <MapView
        style={styles.map}
        // initialRegion={currentLocation}
      >
        {/* <Circle
          center={currentLocation}
          radius={50}
          strokeColor="rgba(255, 0, 0, 1.0)"
          fillColor="rgba(158, 158, 225, 0.3)"
        /> */}
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop:40
  },
  map: {
    width: 350,
    height: 1250,
  },
});

export default Map;
