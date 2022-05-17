import {StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import * as ITEM from '../data/list';
const HomeScreens = () => {
  return (
    <SafeAreaView style={styles.constiner}>
      <FlatList
        data={ITEM.ItemList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.id}</Text>}
      />
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    backgroundColor: '#F4A460',
  },
});
