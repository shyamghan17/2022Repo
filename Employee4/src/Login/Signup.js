import React, { Component } from "react";
import {
  View,
  StyleSheet,
  WebView,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
  CheckBox,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RadioGroup } from "react-native-btr";
import * as CONSTANT from '../Constants/Constant';
import { ScrollView } from "react-native-gesture-handler";
import MultiSelect from "react-native-multiple-select";
import axios from "axios";
import RNRestart from 'react-native-restart';
import constants from "jest-haste-map/build/constants";
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      projectLocationKnown: "",
      DepartmentKnown: "",
      EmployeeKnown: "",
      FirstName: "",
      LastName: "",
      UserName: "",
      PhoneNumber: "",
      Email: "",
      Password: "",
      RetypePassword: "",
      termsCheck: false,
      btnLoading: false,
      radioButtons: [
        {
          label:CONSTANT.SignupMale,
          value: "male",
          checked: true,
          color: "#323232",
          disabled: false,
          width: "33.33%",
          size: 7
        },
        {
          label:CONSTANT.SignupFemale,
          value: "female",
          checked: false,
          color: "#323232",
          disabled: false,
          width: "33.33%",
          size: 7
        }
      ],
      radioButtonsforStartAs: [
        {
          label: CONSTANT.SignupFreelancer,
          value: "freelancer",
          checked: true,
          color: "#323232",
          disabled: false,
          width: "33.33%",
          size: 7,
        },
        {
          label: CONSTANT.SignupCompany,
          value: "company",
          checked: false,
          color: "#323232",
          disabled: false,
          width: "33.33%",
          size: 7
        },
      ]
    };
    this.showFilters = true;
  }
  componentDidMount() {
    this.ProjectLocationSpinner();
    this.NoEmployeeSpinner();
    this.Departments();
  }
  ProjectLocationSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_taxonomy?taxonomy=locations",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let projectLocation = responseJson;
        this.setState({
          projectLocation
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  NoEmployeeSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_list?list=no_of_employes",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let NoEmployee_data = responseJson;
        this.setState({
          NoEmployee_data
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  Departments = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_taxonomy?taxonomy=department",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let TotaolDepartments = responseJson;
        this.setState({
          TotaolDepartments
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  CreateAccount = () => {
    const {params} = this.props.navigation.state;
    let selectedItemgender = this.state.radioButtons.find(e => e.checked == true);
    let selectedItemtype = this.state.radioButtonsforStartAs.find(e => e.checked == true);
    const {
      projectLocationKnown,
      DepartmentKnown,
      EmployeeKnown,
      FirstName,
      LastName,
      UserName,
      PhoneNumber,
      Email,
      Password,
      RetypePassword,
      termsCheck
    } = this.state;
    console.log(
      projectLocationKnown,
      DepartmentKnown,
      EmployeeKnown,
      FirstName,
      LastName,
      UserName,
      PhoneNumber,
      Email,
      Password,
      RetypePassword,
      termsCheck,
      selectedItemtype.value
    )
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (FirstName == "" || LastName == "" || Email == "" || Password == "" || RetypePassword == "") {
      alert("Please enter Complete Detail");
      //this.setState({ email: "Please enter Complete Detail" });
    }
    else if (reg.test(Email) === false) {
      alert("Email is Not Correct");
      //this.setState({ email: "Email is Not Correct" });
      return false;
    }
    else if (Password !== RetypePassword) {
      alert("Passwords don't match");
    }
    else if (params.PhoneMandatory != 'disable' && PhoneNumber == '') {
      alert("Please Enter Phone Number");
    }
    else if (termsCheck !== true) {
      alert("Please Select Terms & Conditions");
    } else {
      this.setState({btnLoading: true});
      axios
        .post(
          CONSTANT.BaseUrl + "user/signup",
          {
            //gender: selectedItemgender,
            username: UserName,
            user_phone_number: PhoneNumber,
            email: Email,
            first_name: FirstName,
            last_name: LastName,
            location: projectLocationKnown[0],
            password: Password,
            verify_password: RetypePassword,
            department: DepartmentKnown[0],
            employees: EmployeeKnown[0],
            user_type: selectedItemtype.value,
            termsconditions: termsCheck
          }
        )
        .then(async response => {
          console.log('response', response)
          if (response.status === 200) {
            // this.setState({btnLoading: false});
            Alert.alert(response.data.message);
            console.log("200 case" , response.data.message);
            {this.login(Email, Password)}
            // if (response.data.verify_user === "verified") {
            //   this.setState({btnLoading: false});
            //   Alert.alert(response.data.message);
            //   console.log("200 verified" , response.data.message);
            //   this.props.navigation.navigate('VerificationAccount', { user_id: response.data.user_id });
            // } else {
            //   this.setState({btnLoading: false});
            //   Alert.alert(response.data.message);
            //   console.log("200 not verified" , response.data.message);
            // }
          } else if (response.status === 203) {
            this.setState({btnLoading: false});
            Alert.alert("Error" , response.data.message);
            console.log("203" , response.data.message);
          }
        })
        .catch(error => {
          this.setState({btnLoading: false});
          console.log(error);
        });
    }
  };
  login = (username, password) => {
    // Alert.alert(username, password)
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
          this.setState({btnLoading: false});
          RNRestart.Restart();
        } else if (response.data.type == "error") {
          this.setState({btnLoading: false});
          alert("Please Check Your Email / Password or Check Network ");
        }
      })
      .catch(error => {
        this.setState({ btnLoading: false });
        console.log(error);
      });
  };
  render() {
    const {params} = this.props.navigation.state;
    let selectedItem = this.state.radioButtons.find(e => e.checked == true);
    selectedItem = selectedItem
      ? selectedItem.value
      : this.state.radioButtons[0].value;
    let selectedItemforStartAs = this.state.radioButtonsforStartAs.find(e => e.checked == true);
    selectedItemforStartAs = selectedItemforStartAs
      ? selectedItemforStartAs.value
      : this.state.radioButtonsforStartAs[0].value;
    const {
      FirstName,
      LastName,
      UserName,
      PhoneNumber,
      Email,
      Password,
      RetypePassword,
      termsCheck
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={CONSTANT.statusBarColor} barStyle="light-content" />
        <View
          style={{
            height: 60,
            paddingLeft: 15,
            paddingRight: 15,
            width: "100%",
            backgroundColor: CONSTANT.primaryColor,
            flexDirection: "row",
            shadowOffset: { width: 0, height: 2 },
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 10
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack(null)}
            style={{
              flexDirection: "column",
              width: "20%",
              display: "flex",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <AntIcon name="back" size={25} color={"#fff"} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              width: "60%",
              display: "flex",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#fff",
                  height: 30,
                  marginTop: 9
                }}
              >
                {CONSTANT.SignupHeader}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <Image
          resizeMode={"contain"}
            style={{ width: 150, resizeMode: "center", alignSelf: "center", marginTop: 30 }}
            source={require("../Images/logologin.png")}
          />
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              color: "#807f7f"
            }}
          >
            {CONSTANT.Signupmain}
          </Text>
          <View
            style={{
              height: 65,
              flexDirection: "column",
              justifyContent: "center",
              margin: 15,
              backgroundColor: "#fcfcfc",
              borderLeftWidth: 5,
              borderLeftColor: CONSTANT.primaryColor
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
                fontWeight: "700",
                color: "#000000",
              }}>
              {CONSTANT.SignupPersonal}
                  </Text>
          </View>
          <View style={{ borderWidth: 0.6, borderRadius: 4, margin: 10, borderColor: '#dddddd' }}>
            {/* <View style={{}}>
              <RadioGroup
                color={CONSTANT.primaryColor}
                labelStyle={{ fontSize: 14 }}
                radioButtons={this.state.radioButtons}
                onPress={radioButtons => this.setState({ radioButtons })}
                style={{
                  paddingTop: 0,
                  flexDirection: "row",
                  marginBottom: 10,
                  marginTop: 10,
                  marginLeft: 10,
                  display: "flex",
                  width: "100%",
                  alignSelf: "center",
                  alignContent: "center",
                  textAlign: "center"
                }}
              />
            </View>
            <View
              style={{
                borderBottomColor: "#dddddd",
                borderBottomWidth: 0.6
              }}
            /> */}
            <TextInput
              style={{ fontSize: 17, color: '#323232', height: 45, marginLeft: 5 }}
              underlineColorAndroid="transparent"
              editable={true}
              placeholderTextColor="#999999"
              onChangeText={FirstName => this.setState({ FirstName })}
              placeholder={CONSTANT.SignupFname}></TextInput>
            <View
              style={{
                borderBottomColor: "#dddddd",
                borderBottomWidth: 0.6
              }}
            />
            <TextInput
              style={{ fontSize: 17, color: '#323232', height: 45, marginLeft: 5 }}
              underlineColorAndroid="transparent"
              editable={true}
              placeholderTextColor="#999999"
              onChangeText={LastName => this.setState({ LastName })}
              placeholder={CONSTANT.SignupLname}></TextInput>
            <View
              style={{
                borderBottomColor: "#dddddd",
                borderBottomWidth: 0.6
              }}
            />
            {params.RemoveUsername == 'no' &&
              <>
                <TextInput
                  style={{ fontSize: 17, color: '#323232', height: 45, marginLeft: 5 }}
                  underlineColorAndroid="transparent"
                  editable={true}
                  placeholderTextColor="#999999"
                  onChangeText={UserName => this.setState({ UserName })}
                  placeholder={CONSTANT.SignupUname}></TextInput>
                <View
                  style={{
                    borderBottomColor: "#dddddd",
                    borderBottomWidth: 0.6
                  }}
                />
              </>
            }
            {params.PhoneOptionReg == 'enable' &&
              <>
                <TextInput
                  style={{ fontSize: 17, color: '#323232', height: 45, marginLeft: 5 }}
                  underlineColorAndroid="transparent"
                  editable={true}
                  placeholderTextColor="#999999"
                  onChangeText={PhoneNumber => this.setState({ PhoneNumber })}
                  placeholder={CONSTANT.SignupPnumber}></TextInput>
                <View
                  style={{
                    borderBottomColor: "#dddddd",
                    borderBottomWidth: 0.6
                  }}
                />
              </>
            }
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{ fontSize: 17, color: '#323232', height: 45, marginLeft: 5, width: '90%' }}
                underlineColorAndroid="transparent"
                editable={true}
                placeholderTextColor="#999999"
                autoCompleteType="email"
                onChangeText={Email => this.setState({ Email })}
                placeholder={CONSTANT.SignupEmail}></TextInput>
              <AntIcon name="mail" size={15} color={"#999999"} style={{ top: 15 }} />
            </View>
            <View
              style={{
                borderBottomColor: "#dddddd",
                borderBottomWidth: 0.6
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{ fontSize: 17, color: '#323232', height: 45, marginLeft: 5, width: "90%" }}
                underlineColorAndroid="transparent"
                editable={true}
                placeholderTextColor="#999999"
                autoCompleteType="password"
                onChangeText={Password => this.setState({ Password })}
                placeholder={CONSTANT.SignupPassword}></TextInput>
              <AntIcon name="lock" size={15} color={"#999999"} style={{ top: 15 }} />
            </View>
            <View
              style={{
                borderBottomColor: "#dddddd",
                borderBottomWidth: 0.6
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{ fontSize: 17, color: '#323232', height: 45, marginLeft: 5, width: '90%' }}
                underlineColorAndroid="transparent"
                editable={true}
                placeholderTextColor="#999999"
                autoCompleteType="password"
                onChangeText={RetypePassword => this.setState({ RetypePassword })}
                placeholder={CONSTANT.SignupRetypePassword}></TextInput>
              <AntIcon name="lock" size={15} color={"#999999"} style={{ top: 15 }} />
            </View>
          </View>
          { (params.HideLoaction == 'no' && params.LoginSignupType != 'single_step') &&
            <>
              <View
                style={{
                  height: 65,
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: 15,
                  backgroundColor: "#fcfcfc",
                  borderLeftWidth: 5,
                  borderLeftColor: CONSTANT.primaryColor
                }}
              >
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#000000",
                  }}>
                  {CONSTANT.SignupLocation}
                </Text>
              </View>
              <View style={{ marginLeft: 15, marginRight: 15 }}>
                <MultiSelect
                  ref={component => {
                    this.multiSelect = component;
                  }}
                  onSelectedItemsChange={value =>
                    this.setState({ projectLocationKnown: value })
                  }
                  uniqueKey="slug"
                  items={this.state.projectLocation}
                  selectedItems={this.state.projectLocationKnown}
                  borderBottomWidth={0}
                  single={true}
                  searchInputPlaceholderText={CONSTANT.SignupSearchProjectLocation}
                  selectText={CONSTANT.SignupPickLocation}
                  styleMainWrapper={{backgroundColor:'#fff' , borderRadius:4 , marginTop:10   }}
                  styleDropdownMenuSubsection={{backgroundColor:'#fff' , paddingRight:-7  , height:60 , paddingLeft:10  , borderWidth:0.6 , borderColor:'#fff' , borderColor:'#dddddd' , borderRadius:4}}

                  onChangeInput={text => console.log(text)}
                  displayKey="name"
                  submitButtonText={CONSTANT.Submit}
                  underlineColorAndroid="transparent"
                />
              </View>
            </>
          }
          <View
            style={{
              height: 65,
              flexDirection: "column",
              justifyContent: "center",
              margin: 15,
              backgroundColor: "#fcfcfc",
              borderLeftWidth: 5,
              borderLeftColor: CONSTANT.primaryColor
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
                fontWeight: "700",
                color: "#000000",
              }}>
            {CONSTANT.SignupStartas}
                  </Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <RadioGroup
              color={CONSTANT.primaryColor}
              labelStyle={{ fontSize: 14 }}
              radioButtons={this.state.radioButtonsforStartAs}
              onPress={radioButtons => this.setState({ radioButtons })}
              style={{
                paddingTop: 0,
                flexDirection: "row",
                marginBottom: 10,
                marginTop: 10,
                marginLeft: 10,
                display: "flex",
                width: "100%",
                alignSelf: "center",
                alignContent: "center",
                textAlign: "center"
              }}
            />
          </View>
          {(selectedItem == "company" && params.LoginSignupType != 'single_step' && params.HideDepartments == 'no') ? (
            <>
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    textAlign: "left",
                    fontSize: 13,
                    fontWeight: "500",
                    marginTop: 20,
                    color: CONSTANT.primaryColor
                  }}
                >
                {CONSTANT.SignupNoEmp}
                    </Text>
                <View
                  style={{ marginLeft: 20, marginRight: 20, marginTop: 5 }}
                >
                  <MultiSelect
                    ref={component => {
                      this.multiSelect = component;
                    }}
                    onSelectedItemsChange={value =>
                      this.setState({ EmployeeKnown: value })
                    }
                    uniqueKey="value"
                    items={this.state.NoEmployee_data}
                    selectedItems={this.state.EmployeeKnown}
                    borderBottomWidth={0}
                    single={true}
                    searchInputPlaceholderText={CONSTANT.SignupSearchEmployees}
                    selectText={CONSTANT.SignupPickEmployees}
                styleMainWrapper={{backgroundColor:'#fff' , borderRadius:4 , marginTop:10   }}
                styleDropdownMenuSubsection={{backgroundColor:'#fff' , paddingRight:-7  , height:60 , paddingLeft:10  , borderWidth:0.6 , borderColor:'#fff' , borderColor:'#dddddd' , borderRadius:4}}

                    onChangeInput={text => console.log(text)}
                    displayKey="title"
                    submitButtonText={CONSTANT.Submit}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    textAlign: "left",
                    fontSize: 13,
                    fontWeight: "500",
                    marginTop: 10,
                    color: CONSTANT.primaryColor
                  }}
                >
                {CONSTANT.SignupDepartment}
                    </Text>
                <View
                  style={{ marginLeft: 20, marginRight: 20, marginTop: 5 }}
                >
                  <MultiSelect
                    ref={component => {
                      this.multiSelect = component;
                    }}
                    onSelectedItemsChange={value =>
                      this.setState({ DepartmentKnown: value })
                    }
                    uniqueKey="slug"
                    items={this.state.TotaolDepartments}
                    selectedItems={this.state.DepartmentKnown}
                    borderBottomWidth={0}
                    single={true}
                    searchInputPlaceholderText={CONSTANT.SignupSearchDepartment}
                    selectText={CONSTANT.SignupPickDepartment}
                styleMainWrapper={{backgroundColor:'#fff' , borderRadius:4 , marginTop:10   }}
                styleDropdownMenuSubsection={{backgroundColor:'#fff' , paddingRight:-7  , height:60 , paddingLeft:10  , borderWidth:0.6 , borderColor:'#fff' , borderColor:'#dddddd' , borderRadius:4}}

                    onChangeInput={text => console.log(text)}
                    displayKey="name"
                    submitButtonText={CONSTANT.Submit}
                  />
                </View>
              </View>
            </>
          ): null}
          <View style={{marginTop: 20, marginHorizontal: 15, marginBottom: 10, flexDirection: 'row'}}>
            <TouchableOpacity 
              onPress={() => this.setState({termsCheck: !termsCheck})}
              style={{
                width: 20, 
                height: 20, 
                backgroundColor: termsCheck == false ? '#fff' : CONSTANT.primaryColor,
                justifyContent: 'center', 
                alignItems: 'center', 
                borderWidth: 1, 
                borderColor: '#323232', 
                borderRadius: 5, 
                marginRight: 5
              }}>
              <FontAwesome name="check" size={15} color={"#fff"} />
            </TouchableOpacity>
            <Text style={{width: '90%', color: '#767676'}}>{params.TermText}</Text>
          </View>
          <TouchableOpacity
            onPress={this.CreateAccount}
            style={{
              alignItems: "center",
              justifyContent: 'center',
              height: 40,
              margin: 10,
              borderRadius: 4,
              width: "50%",
              alignSelf: "center",
              backgroundColor: CONSTANT.primaryColor,
              flexDirection:'row'
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}>
              {CONSTANT.SignupContinue}
            </Text>
            {this.state.btnLoading == true ? (
              <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Login")}
            style={{ backgroundColor: CONSTANT.primaryColor, height: 45, width: "100%", marginTop: 10 }}
          >
            <Text style={{ color: "#fff", alignSelf: 'center', fontSize: 17, top: 12 }}>{CONSTANT.SignupMoveSignin}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
