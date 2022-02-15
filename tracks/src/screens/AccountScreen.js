import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
<Spacer />
<Spacer />
<Spacer />

        <Text h4 >Account Screen</Text>
        <Spacer/>

        <Button title='Sign Out' onPress={signOut} />
      {/* </View> */}
      </SafeAreaView>
 
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container:{
   
        justifyContent:'center',
        alignItems:'center',
    }
});
