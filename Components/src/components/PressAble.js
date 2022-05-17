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
        style={({pressed}) => [
          styles.touchableOpacity,
          {backgroundColor: pressed ? '#8B4513' : '#F4A460'},
        ]}>
        {({pressed}) => (
          <Text style={{color: pressed ? '#fff111' : '#111fff', fontSize: 20}}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default PressAble;

const styles = StyleSheet.create({
  // constainer: {flex: 1, position: 'absolute'},
  touchableOpacity: {
    margin: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#8B4513',
    shadowOpacity: 0.9,
    shadowOffset: {width: 5, height: 10},
    shadowRadius: 15,
  },
});
