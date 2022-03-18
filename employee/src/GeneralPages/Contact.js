import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';
import SimpleHeader from "../Header/SimpleHeader";
import * as CONSTANT from "../Constants/Constant";
import styles from "../Constants/Styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
      <SimpleHeader HeaderText={CONSTANT.ContactNumberContactSupport} />
        <View style={styles.contactMainArea}>
          <View style={styles.contactTextArea}>          
      <Text style={styles.iconName}>Our team will be happy to help you</Text>
      <View
style={{
  width:"70%",
  margin:15,
  borderBottomColor: '#010101',
  borderBottomWidth: 3,
}}
/>

<View style={[ {flexDirection: "column"}]}>



<View style={styles.cacolumn}>
<MaterialIcons name="email" style={styles.materialIconn}/>
<Text style={styles.iconName}>Email Us</Text>
<Text style={styles.details}>info@employee.to</Text>
</View>

<View style={styles.cacolumn}>
<MaterialIcons name="phone" style={styles.materialIconn}/>
<Text style={styles.iconName}>Call us</Text>
<Text style={styles.details}>+49-30-20679115</Text></View>

<View style={styles.cacolumn}>
<MaterialIcons name="my-location" style={styles.materialIconn}/>
<Text style={styles.iconName}>Address</Text>
<Text style={styles.details}>Karl-Liebknecht-Str. 34, {'\n'} 10178 Berlin, Germany</Text></View>
  </View>

          </View>
        </View>
    </View>
  );
}
}
export default withNavigation(Contact);
