import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import Touchable_Opacity from '../components/Touchable_Opacity';
import PressAble from '../components/PressAble';
import Touchable_Highlight from '../components/Touchable_Highlight';
import Toggle_Switch from '../components/Toggle_Switch';
import Search from '../components/Search';

const HomeScreens = () => {
  const [first, setfirst] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreens</Text>
        <Touchable_Opacity
          label={'Touchable_Opacity'}
          onPress={() => Alert.alert('hello, Button Pressed')}
        />
        <PressAble
          label="PressAble"
          onPressFunction={() => Alert.alert('hello, Button Pressed')}
        />
        <Touchable_Highlight
          label={'Touchable_Highlight'}
          onPressFunction={() => Alert.alert('I am Touchable_Highlight')}
        />
        <Toggle_Switch />
        <Search placeholder="Type here" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
