import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";
import React from "react";
import Title from "./Title";
import { styles } from "./styles";

const NavigationComponent = ({ title, onPress, image }) => {
  return (
    <View style={[styles.navigationComponent, styles.shadowForAll]}>
      <Title title={title} />
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.imageStyle} source={image} />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationComponent;
