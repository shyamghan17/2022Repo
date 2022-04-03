import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const PrintScreen = ({navigation}) => {
  return (
    <View>
      <Text>PrintScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ height: 30, width: 30 }}
                source={require("../images/forward.png")}
              />
            </TouchableOpacity>
    </View>
  )
}

export default PrintScreen

const styles = StyleSheet.create({})