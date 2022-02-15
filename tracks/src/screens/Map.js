import React, { useContext } from "react";
import MapView, { Circle } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { Context as LocationContext } from "../context/locationContext";
import { ActivityIndicator } from "react-native";
import Spacer from "../components/Spacer";

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);

  console.log(currentLocation, "current location");
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <>
      <Spacer />
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Circle
          center={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          radius={25}
          strokeColor="rgba(255, 0, 0, 1.0)"
          fillColor="rgba(158, 158, 225, 0.2)"
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width:Dimensions.get('window').width,
    height: 350
  }
});

export default Map;
