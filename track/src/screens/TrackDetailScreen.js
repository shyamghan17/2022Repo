import React from 'react'
import { StyleSheet, Text,SafeAreaView, View, TouchableOpacity } from 'react-native'
import *as CONSTANT from '../constant/Constant'

const TrackDetailScreen = ({navigation}) => {
    return (
        <SafeAreaView>
        <View>
            <Text>Track Details</Text>
            <TouchableOpacity onPress={() => navigation.navigate(CONSTANT.TRACKLIST)}>
        <Text>press me</Text>
      </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default TrackDetailScreen

const styles = StyleSheet.create({})
