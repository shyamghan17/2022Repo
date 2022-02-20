import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  AsyncStorage,
  NativeModules,
  TextInput,
  BackHandler,
  Alert,
  Modal,
  ActivityIndicator
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import RNRestart from 'react-native-restart';
import { CalloutSubview } from "react-native-maps";
import axios from "axios";
import home from "../Home/home";
import CustomHeader from "../Header/CustomHeader";
import { Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as CONSTANT from '../Constants/Constant';
import SimpleHeader from "../Header/SimpleHeader";
class LoginScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isProgress: false,
      showPass: true,
    };
  }
  openProgressbar = () => {
    this.setState({ isProgress: true })
  }
  login = () => {
    const { username, password } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username == "") {
      //alert("Please enter Email address");
      this.setState({ email: "Please enter Email address" });
    } else if (reg.test(username) === false) {
      //alert("Email is Not Correct");
      this.setState({ email: "Email is Not Correct" });
      return false;
    } else if (password == "") {
      this.setState({ email: "Please enter password" });
    } else {
      this.openProgressbar();
      axios
        .post(
          CONSTANT.BaseUrl + "user/do_login",
          {
            username: username,
            password: password
          }
        )
        .then(async response => {
          if (response.data.type == "success") {
            await AsyncStorage.setItem(
              "full_name",
              response.data.profile.pmeta.full_name
            );
            await AsyncStorage.setItem(
              "user_type",
              response.data.profile.pmeta.user_type
            );
            await AsyncStorage.setItem(
              "profile_img",
              response.data.profile.pmeta.profile_img
            );
            await AsyncStorage.setItem(
              "listing_type",
              response.data.profile.umeta.listing_type
            );
            await AsyncStorage.setItem(
              "profileBanner",
              response.data.profile.pmeta.banner_img
            );
            await AsyncStorage.setItem("profileType",
              response.data.type
            );
            await AsyncStorage.setItem(
              "projectUid",
              response.data.profile.umeta.id
            );
            await AsyncStorage.setItem(
              "projectProfileId",
              JSON.stringify(response.data.profile.umeta.profile_id)
            );
            await AsyncStorage.setItem(
              "chatPermission",
              response.data.profile.umeta.chat_permission
            );
            await AsyncStorage.setItem(
              "shipping_address1",
              response.data.profile.shipping.address_1
            );
            await AsyncStorage.setItem(
              "shipping_city",
              response.data.profile.shipping.city
            );
            await AsyncStorage.setItem(
              "shipping_company",
              response.data.profile.shipping.company
            );
            await AsyncStorage.setItem(
              "shipping_country",
              response.data.profile.shipping.country
            );
            await AsyncStorage.setItem(
              "shipping_first_name",
              response.data.profile.shipping.first_name
            );
            await AsyncStorage.setItem(
              "shipping_last_name",
              response.data.profile.shipping.last_name
            );
            await AsyncStorage.setItem(
              "shipping_state",
              response.data.profile.shipping.state
            );
            await AsyncStorage.setItem(
              "billing_address_1",
              response.data.profile.billing.address_1
            );
            await AsyncStorage.setItem(
              "billing_city",
              response.data.profile.billing.city
            );
            await AsyncStorage.setItem(
              "zip_code",
              response.data.profile.billing.postcode
            );
            await AsyncStorage.setItem(
              "billing_company",
              response.data.profile.billing.company
            );
            await AsyncStorage.setItem(
              "billing_country",
              response.data.profile.billing.country
            );
            await AsyncStorage.setItem(
              "billing_first_name",
              response.data.profile.billing.first_name
            );
            await AsyncStorage.setItem(
              "billing_last_name",
              response.data.profile.billing.last_name
            );
            await AsyncStorage.setItem(
              "billing_email",
              response.data.profile.billing.email
            );
            await AsyncStorage.setItem(
              "billing_phone",
              response.data.profile.billing.phone
            );
            await AsyncStorage.setItem(
              "billing_state",
              response.data.profile.billing.state
            );
            await AsyncStorage.setItem(
              "user_email",
              response.data.profile.umeta.user_email
            );
            await AsyncStorage.setItem("peojectJobAccess", response.data.profile.umeta.job_access);
            await AsyncStorage.setItem("projectServiceAccess", response.data.profile.umeta.service_access)
            this.setState({ isProgress: false })
            RNRestart.Restart();
          } else if (response.data.type == "error") {
            this.setState({ isProgress: false });
            alert("Please Check Your Email / Password or Check Network ");
          }
        })
        .catch(error => {
          this.setState({ isProgress: false });
          console.log(error);
        });
    }
    Keyboard.dismiss();
  };
  onButtonPress = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    // then navigate
    navigate("NewScreen");
  };
  handleBackButton = () => {
    Alert.alert(
      "Exit App",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp()
        }
      ],
      {
        cancelable: false
      }
    );
    return true;
  };
  render() {
    const {params} = this.props.navigation.state;
    return (
      this.state.isProgress ?
        <CustomProgressBar /> :
        <View style={{ flex: 1 }}>
          <SimpleHeader HeaderText={CONSTANT.LoginHeader}/>
          <View style={styles.container}>
            <Text style={{ padding: 10, margin: 10, color: "red" }}>
              {this.state.email}
            </Text>
            <Image
              resizeMode={"contain"}
              style={{ width: 150, alignSelf: "center" }}
              source={require("../Images/logologin.png")}
            />
            <Text
              style={{
                textAlign: "center",
                alignSelf: "center",
                color: "#807f7f"
              }}
            >
              {CONSTANT.Loginmain}
            </Text>
            <View
              style={{
                width: "90%",
                borderWidth: 0.6, borderRadius: 4, margin: 10, borderColor: '#dddddd'
              }}>
              <TextInput
                style={{ fontSize: 15, padding: 5, height: 40, color: '#323232' }}
                underlineColorAndroid="transparent"
                name="username"
                placeholder={CONSTANT.LoginEmail}
                placeholderTextColor="#807f7f"
                onChangeText={username => this.setState({ username })}
              />
              <View
                style={{ borderBottomColor: "#dddddd", borderBottomWidth: 0.6 }}
              />
              
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextInput
                  style={{ fontSize: 15, padding: 5, height: 40, color: '#323232', width: '90%'}}
                  underlineColorAndroid="transparent"
                  editable={true}
                  secureTextEntry={true}
                  name="password"
                  placeholder= {CONSTANT.LoginPassword}
                  placeholderTextColor="#807f7f"
                  onChangeText={password => this.setState({ password })}
                  secureTextEntry={this.state.showPass}
                />
                <TouchableOpacity 
                  onPress={() => this.setState({showPass:!this.state.showPass})}
                  style={{alignItems: 'center', justifyContent: 'space-between', width: '10%', height: 40}}
                >
                  <Entypo name={this.state.showPass == true ? "eye-with-line":"eye"} size={15} color={"#999999"} style={{padding :10}} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={this.login}
              style={{
                alignItems: "center",
                height: 40,
                margin: 10,
                borderRadius: 4,
                width: "50%",
                alignSelf: "center",
                backgroundColor: CONSTANT.primaryColor
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                  paddingTop: 10
                }}
              >
                 {CONSTANT.LoginButton}
            </Text>
            </TouchableOpacity>
            <Text
              onPress={() => this.props.navigation.navigate("ForgetPassword", {
                RegistrationOption: params.RegistrationOption,
              })}
              style={{
                textAlign: "center",
                alignSelf: "center",
                color: "#616161",
                fontSize: 15,
                margin: 10
              }}
            >
              {CONSTANT.LoginForget}
            </Text>
          </View>
          {(params.RegistrationOption && params.RegistrationOption != 'disable') &&
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.props.navigation.navigate("Signup", {
                LoginSignupType: params.LoginSignupType,
                DefaultRole: params.DefaultRole,
                RemoveUsername: params.RemoveUsername,
                HideLoaction: params.HideLoaction,
                TermText: params.TermText,
                TermPageLink: params.TermPageLink,
                RemoveRegistration: params.RemoveRegistration,
                PhoneOptionReg: params.PhoneOptionReg,
                PhoneMandatory: params.PhoneMandatory,
                HideDepartments: params.HideDepartments,
              })}
              style={{ 
                backgroundColor: CONSTANT.primaryColor, 
                height: 45, 
                width: "100%",
                alignItems:'center',
                justifyContent:'center',
                marginTop: 10 
              }}>
              <Text
                style={{ 
                  color: "#fff",
                  fontSize: 17,
                }}
              >
                {CONSTANT.LoginMoveSignup}
              </Text>
            </TouchableOpacity>
          }
        </View>
    );
  }
}
const CustomProgressBar = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25, position: 'absolute' }}>
        <Text style={{ fontSize: 20, fontWeight: '200' }}>{CONSTANT.Loading}</Text>
        <ActivityIndicator size="large" color={CONSTANT.primaryColor} />
      </View>
    </View>
  </Modal>
);
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
