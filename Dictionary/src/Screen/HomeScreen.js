
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as CONSTANT from '../Constant/NavigationString';



const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Dictionary App</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(CONSTANT.Result)}>
            <Text>press me </Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
