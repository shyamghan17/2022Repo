import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const PressAble = ({
  onPressFunction,
  onPressInFinction,
  onPressOutFunction,
  onPressLongFunction,
  label,
}) => {
  return (
    <View style={styles.constainer}>
      <Pressable
        style={styles.touchableOpacity}
        onPressIn={onPressInFinction}
        onPressOut={onPressOutFunction}
        onLongPress={onPressLongFunction}
        onPress={onPressFunction}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default PressAble;

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
