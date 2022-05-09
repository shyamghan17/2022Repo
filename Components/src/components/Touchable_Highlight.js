import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';

const Touchable_Highlight = ({label, onPressFunction}) => {
  return (
    <View style={styles.constainer}>
      <TouchableHighlight
        onPress={onPressFunction}
        style={styles.touchableOpacity}>
        <Text style={styles.text}>{label}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Touchable_Highlight;

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
