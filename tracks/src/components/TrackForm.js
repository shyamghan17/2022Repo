import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/locationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  console.log(locations.length)
  return (
    <>
      <Spacer />
      <Input
        value={name}
        style={{ width: 50 }}
        placeholder="Enter Name"
        onChangeText={changeName}
      />
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button title='Start Rcording' onPress={startRecording} />
      )}
      <Spacer />
    </>
  );
};

export default TrackForm;
