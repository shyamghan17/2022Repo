import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Touchable_Opacity = ({onPress, label}) => {
  return (
    <View style={styles.constainer}>
      <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Touchable_Opacity;

const styles = StyleSheet.create({
  constainer: {},
  touchableOpacity: {
    backgroundColor: '#232323',
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'red',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
