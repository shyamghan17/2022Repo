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
  constainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  touchableOpacity: {
    margin: 10,
    paddingVertical: 20,
    backgroundColor: '#F4A460',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#8B4513',
    shadowOpacity: 0.9,
    shadowOffset: {width: 5, height: 10},
    shadowRadius: 15,
  },
  text: {
    fontStyle: 'italic',
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
});
