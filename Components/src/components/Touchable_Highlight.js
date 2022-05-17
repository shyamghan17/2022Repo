import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';

const Touchable_Highlight = ({label, onPressFunction}) => {
  return (
    <View>
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
    fontSize: 20,
    color: 'white',
  },
});
