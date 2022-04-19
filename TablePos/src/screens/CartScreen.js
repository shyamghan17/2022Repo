import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { styles } from '../components/styles';
import DataContext from '../Global/DataContex';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  const { table, cart, completeTask, setTable } = useContext(DataContext);
  const [dataList, setDataList] = useState([]);

  const setStatusFilter = (table) => {
    let addedItems = cart;
      if (table) {
        let foundIndex = cart?.findIndex((X) => X.tableNum === table);
        setDataList(addedItems[foundIndex].items)
      }
    };
  
  console.log(dataList, 'dataList');
  let total = dataList.reduce((currentTotal, item) => {
    return item.price + currentTotal;
  }, 0);
  let totalPrice = total.toFixed(2);

  useEffect(() => {
    setStatusFilter(table);
  }, [cart]);
  const renderCatagory = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          setTable(table);
          setStatusFilter()
        }}
      >
        <View style={styles.cateItems}>
          <Text style={styles.textColorBlack}>{item.tableNum}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#CCE3DE' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <AntDesign name='caretleft' size={24} color='black' />
        </TouchableOpacity>

        <Text style={styles.headerText}>
          {table} : ${totalPrice}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Print')}>
          <AntDesign name='caretright' size={24} color='black' />
        </TouchableOpacity>
      </View>

      <View style={styles.catList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCatagory}
          horizontal={true}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.itemList}>
              <View>
                <Text style={styles.textColorWhite}>{item.item}</Text>
                <Text style={styles.textColorWhite}>{item.id}</Text>
                <Text style={styles.textColorWhite}>$: {item.price}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity>
                  <Ionicons name='md-remove-circle' size={24} color='black' />
                </TouchableOpacity>
                <Text style={styles.headerText}>{'10'}</Text>
                <TouchableOpacity>
                  <Ionicons name='add-circle' size={24} color='black' />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    completeTask(item.id);
                  }}
                >
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require('../images/delete.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
