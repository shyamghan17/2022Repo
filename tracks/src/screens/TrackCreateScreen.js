// import "../screens/_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Context as LocationContext } from "../context/locationContext";
import Map from "./Map";
import useLocation from "../hooks/useLocation";
import { SafeAreaView } from "react-navigation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

const TrackCreateScreen = () => {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation((location) => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Spacer />
      <Text>Track Create Screen</Text>

      <Map />

      {err ? <Text>Please enable location Sercices </Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default TrackCreateScreen;
