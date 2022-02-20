import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  Share,
  FlatList,
  NativeModules,
  ViewBase,
  Alert,
  I18nManager
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MultiSelect from 'react-native-multiple-select';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Header} from 'react-native-elements';
import DocumentPicker from 'react-native-document-picker';
import SelectedDocLayout from '../CompleteEmployers/SelectedDocLayout';
import Spinner from 'react-native-loading-spinner-overlay';
import * as CONSTANT from '../Constants/Constant';
import styles from '../Constants/Styles';
import SimpleHeader from '../Header/SimpleHeader';
var ImagePicker = NativeModules.ImageCropPicker;
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
class SendProposal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      images: null,
      Uid: '',
      DurationListKnown: '',
      Description: '',
      showAlert: false,
      showSuccessAlert: false,
      amount: '0',
      chagrgedamount: '0',
      TotalAmount: '0',
      perHourRate: '0',
      EstimatedHour: 0,
      spinner: true,
      ApplicationCurrency: '',
      ApplicationAccessJob:'',
    };
  }
  componentDidMount() {
    this.checkAccess();
    this.fetchDurationList();
    //this.fetchCommissionType();
  }
  fetchDurationList = async () => {
    return fetch(CONSTANT.BaseUrl + 'taxonomies/get_list?list=duration_list', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        let DurationList = responseJson;
        this.setState({
          spinner: false,
          DurationList,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  fetchCommissionType = async () => {
    const {amount} = this.state;
    console.log('amount', amount)
    if(amount == 0){
      alert('Please enter your proposal amount')
    }else{
      this.setState({spinner: true});
      const {params} = this.props.navigation.state;
      console.log('post id', params.job_id)
      
      const response = await fetch(CONSTANT.BaseUrl + 'proposal/commission_fee?post_id='+ params.job_id +'&proposed_amount='+ amount +'&type=projects');
      const json = await response.json();
      this.setState({
        chagrgedamount: json.admin_amount,
        TotalAmount: json.freelancer_amount,
        spinner: false
      });
      console.log(this.state.chagrgedamount)
      console.log(this.state.TotalAmount)
    }
  };
  checkAccess = async () => {
    const response = await fetch(CONSTANT.BaseUrl + 'user/get_access');
    const json = await response.json();
    this.setState({ApplicationCurrency: json.currency_symbol});
    this.setState({ApplicationAccessJob: json.theme_name});
  };
  // calculateChargedAmmount = (type, fixed, percenage) => {
  //   const {amount} = this.state;
  //   // console.log('amount', amount)
  //   // console.log(type, fixed, percenage)
  //   if(type == 'percentage'){
  //     var looseamount = (amount / 100) * percenage;
  //     var getAmount = amount - looseamount;
  //   }else if(type == 'fixed'){
  //     var looseamount = fixed;
  //     var getAmount = amount - looseamount;
  //   }else if(type == 'none'){
  //     var looseamount = 0;
  //     var getAmount = amount - looseamount;
  //   }else null
  //   this.setState({
  //     chagrgedamount: looseamount,
  //   });
  //   this.setState({
  //     TotalAmount: getAmount,
  //   });
  // };
  // calculateHourlyChargedAmmount = () => {
  //   const {amount, perHourRate, EstimatedHour} = this.state;
  //   var CalculatedPerHourRate = perHourRate * EstimatedHour;
  //   this.setState(
  //     {
  //       amount: CalculatedPerHourRate,
  //     },
  //     this.fetchCommissionType,
  //   );
  // };
  SubmitProposal = async () => {
    this.setState({
      spinner: true,
    });
    const Uid = await AsyncStorage.getItem('projectUid');
    const {params} = this.props.navigation.state;
    const {amount, Description, DurationListKnown, images, EstimatedHour} = this.state;
    console.log(
      Uid,
      params.job_id,
      amount, 
      EstimatedHour,
      Description, 
      DurationListKnown, 
      images
    )
    const formData = new FormData();
    formData.append('user_id', Uid);
    formData.append('project_id', params.job_id);
    formData.append('proposed_amount', amount);
    formData.append('estimeted_time', EstimatedHour);
    formData.append('proposed_time', DurationListKnown[0]);
    formData.append('proposed_content', Description);
    
    if( images != null){
      formData.append('size', images.length);
      images.forEach((item, i) => {
        var path = item.uri;
        var filename = item.name;
        formData.append('proposal_files' + i, {
          uri: path,
          type: item.type,
          name: filename || `filename${i}.jpg`,
        });
      });
    }; 
    axios
    .post(CONSTANT.BaseUrl + 'proposal/add_proposal',formData , {
      //method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      //body: formData,
    })
      .then(response => {
        if (response.status == 200) {
          console.log(response);
          this.setState({spinner: false});
          Alert.alert("Success", response.data.message)
          //this.showSuccessAlert();
        } else if (response.status == 203) {
          console.log(response);
          this.setState({spinner: false});
          Alert.alert("Error", response.data.message)
          //this.showAlert();
        }
      })
      .catch(error => {
        this.setState({spinner: false});
        console.log(error);
      });
  };
  pickMultiple() {
    try {
      DocumentPicker.pickMultiple({})
        .then(images => {
          this.setState({
            image: null,
            images: images,
          });
        })
        .catch(e => alert(e));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };
  showSuccessAlert = () => {
    this.setState({
      showSuccessAlert: true,
    });
  };
  hideSuccessAlert = () => {
    this.setState({
      showSuccessAlert: false,
    });
  };
  render() {
    const {showAlert, showSuccessAlert, images} = this.state;
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <SimpleHeader HeaderText={CONSTANT.SendProposal} />
        {this.state.spinner == true && (
          <Spinner
            visible={this.state.spinner}
            textContent={CONSTANT.DoctorAddBookingPleaseWait}
            color={CONSTANT.primaryColor}
            textStyle={styles.SpinnerTextStyle}
          />
        )}
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.MainHeadingTextStyle}>
              {params.job_main_title}
            </Text>
            <View
              style={styles.SendProposalProfessorInfoArea}>
              <View style={styles.SendProposalProfessorInfoSection}>
                <AntIcon name="earth" size={14} color={'#00cc8d'} />
                <View style={{flexDirection:'row',}}>
                  <Text style={[styles.NameTextStyle,{marginLeft: 10}]}>
                    {CONSTANT.SendProposalJobType}{' '}
                  </Text>
                  <Text style={styles.NameTextStyle}>
                    {params.job_type}
                  </Text>
                </View>
              </View>
              <View style={styles.SendProposalProfessorInfoSection}>
                <AntIcon name="folder1" size={14} color={'#3498db'} />
                <View style={{flexDirection:'row',}}>
                  <Text style={[styles.NameTextStyle,{marginLeft: 10}]}>
                    {CONSTANT.SendProposalJobLevel}{' '}
                  </Text>
                  <Text style={styles.NameTextStyle}>
                    {params.job_level}
                  </Text>
                </View>
              </View>
              {params.job_time != '' &&
                <View style={styles.SendProposalProfessorInfoSection}>
                  <AntIcon
                    name="clockcircleo"
                    size={14}
                    color={CONSTANT.primaryColor}
                  />
                  <View style={{flexDirection:'row',}}>
                    <Text style={[styles.NameTextStyle,{marginLeft: 10}]}>
                      {params.job_time}{' '}
                    </Text>
                    <Text style={styles.NameTextStyle}>
                      {CONSTANT.SendProposalHours}
                    </Text>
                  </View>
                </View>
              }
              {params.job_Duration != '' &&
                <View style={styles.SendProposalProfessorInfoSection}>
                  <AntIcon
                    name="clockcircleo"
                    size={14}
                    color={CONSTANT.primaryColor}
                  />
                  <View style={{flexDirection:'row',}}>
                    <Text style={[styles.NameTextStyle,{marginLeft: 10}]}>
                      {params.job_Duration}
                    </Text>
                  </View>
                </View>
              }
            </View>
            <Text
              style={styles.MainHeadingTextStyle}>
              {CONSTANT.SendProposalProposalAmount}
            </Text>
            {params.job_type == 'Fixed' ? (
              <View style={{flexDirection:'row', height: 50, marginBottom: 10}}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={[styles.TextInputLayoutStyle,styles.SendProposalTextInputStyle, {width:'90%'}]}
                  keyboardType="numeric"
                  placeholder={CONSTANT.SendProposalEnterYourProposalAmount}
                  placeholderTextColor="#999999"
                  onChangeText={amount =>
                    this.setState({amount})
                  }
                />
                <TouchableOpacity 
                  onPress={() => this.fetchCommissionType()}
                  style={{width:'10%', justifyContent: 'center', alignItems: 'center'}}>
                  <AntIcon name={I18nManager.isRTL ? "leftcircleo" : "rightcircleo"} size={30} color={'#00cc8d'} />
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <View style={{flexDirection:'row', height: 50, marginBottom: 10}}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={[styles.TextInputLayoutStyle,styles.SendProposalTextInputStyle, {width:'90%'}]}
                    keyboardType="numeric"
                    placeholder={CONSTANT.SendProposalEnterYourPerHourRate}
                    placeholderTextColor="#999999"
                    onChangeText={amount =>
                      this.setState({amount})
                      // this.setState(
                      //   {perHourRate},
                      //   this.calculateHourlyChargedAmmount.bind(this)
                      // )
                    }
                  />
                  <TouchableOpacity 
                    onPress={() => this.fetchCommissionType()}
                    style={{width:'10%', justifyContent: 'center', alignItems: 'center'}}>
                    <AntIcon name={I18nManager.isRTL ? "leftcircleo" : "rightcircleo"} size={30} color={'#00cc8d'} />
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={[styles.TextInputLayoutStyle,styles.SendProposalTextInputStyle, {width:'90%'}]}
                    keyboardType="numeric"
                    placeholder={CONSTANT.SendProposalEstimatedHour}
                    placeholderTextColor="#999999"
                    onChangeText={EstimatedHour =>
                      this.setState(
                        {EstimatedHour},
                        //this.calculateHourlyChargedAmmount.bind(this)
                      )
                    }
                  />
                </View>
              </View>
            )}
            <Text style={[styles.NameTextStyle,{marginVertical: 10}]}>
              {CONSTANT.SendProposalTotalAmount}
            </Text>
            <View
              style={styles.SendProposalAmountMainArea}>
              <View
                style={styles.SendProposalAmountArea}>
                {params.job_type == 'Fixed' ? (
                  <Text style={[styles.SectionHeadingTextStyle,{flex: 1}]}>
                    {entities.decode(params.job_Price)}
                  </Text>
                ) : (
                  <Text style={[styles.SectionHeadingTextStyle,{flex: 1}]}>
                    {entities.decode(params.hourly_rate) +
                      CONSTANT.SendProposalHourRate +
                      params.job_time +
                      CONSTANT.SendProposalHours}
                  </Text>
                )}

                <Text
                  style={[styles.OtherTextStyle,{flex: 1, textAlign: 'right'}]}>
                  {CONSTANT.SendProposalEmployersProjectCost}
                </Text>
              </View>
              <View
                style={styles.SendProposalAmountArea}>
                <Text style={[styles.SectionHeadingTextStyle,{flex: 1}]}>
                  {entities.decode(this.state.ApplicationCurrency)}
                  {this.state.amount}
                </Text>
                {params.job_type == 'Fixed' ?
                  <Text
                    style={[styles.OtherTextStyle,{flex: 1, textAlign: 'right'}]}>
                    {CONSTANT.SendProposalYourProposedProjectCost}
                  </Text>
                  :
                  <Text
                    style={[styles.OtherTextStyle,{flex: 1, textAlign: 'right'}]}>
                    {CONSTANT.SendProposalYourProposedHourlyRate}
                  </Text>
                }
              </View>
              <View
                style={styles.SendProposalAmountArea}>
                <Text style={[styles.SectionHeadingTextStyle,{flex: 1}]}>
                  -{entities.decode(this.state.ApplicationCurrency)}
                  {this.state.chagrgedamount}
                </Text>
                <Text
                  style={[styles.OtherTextStyle,{flex: 1, textAlign: 'right'}]}>
                  {this.state.ApplicationAccessJob} {CONSTANT.SendProposalServiceFee}
                </Text>
              </View>
              <View
                style={styles.SendProposalAmountArea}>
                <Text style={[styles.SectionHeadingTextStyle,{flex: 1}]}>
                  {entities.decode(this.state.ApplicationCurrency)}
                  {this.state.TotalAmount}
                </Text>
                {params.job_type == 'Fixed' ?
                  <Text
                    style={[styles.OtherTextStyle,{flex: 1, textAlign: 'right'}]}>
                    {CONSTANT.SendProposalAmountYouwillreceive}
                  </Text>
                  :
                  <Text
                    style={[styles.OtherTextStyle,{flex: 1, textAlign: 'right'}]}>
                    {CONSTANT.SendProposalHourlyRateAmountYouwillreceive}
                  </Text>
                }
              </View>
            </View>
            {params.job_type == 'Fixed' && (
              <View style={styles.MultiSelectArea}>
                <MultiSelect
                  ref={component => {
                    this.multiSelect = component;
                  }}
                  onSelectedItemsChange={value =>
                    this.setState({DurationListKnown: value})
                  }
                  uniqueKey="value"
                  items={this.state.DurationList}
                  selectedItems={this.state.DurationListKnown}
                  borderBottomWidth={0}
                  single={true}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                  searchInputPlaceholderText={CONSTANT.SendProposalPickJobOffers}
                  selectText={CONSTANT.SendProposalPickJobOffers}
                  styleMainWrapper={styles.MultiSelectstyleMainWrapper}
                  styleDropdownMenuSubsection={styles.MultiSelectstyleDropdownMenuSubsection}
                  onChangeInput={text => console.log(text)}
                  displayKey="title"
                  submitButtonText={CONSTANT.Submit}
                />
              </View>
            )}

            <TextInput
              underlineColorAndroid="transparent"
              style={styles.TextInputLayoutStyleForDetail}
              name="username"
              multiline={true}
              onChangeText={Description => this.setState({Description})}
              placeholder={CONSTANT.Description}
              placeholderTextColor="#807f7f"
            />
            {this.state.images != null ? (
              <FlatList
                style={{paddingBottom: 5, paddingTop: 10}}
                data={this.state.images}
                keyExtractor={(y, z) => z.toString()}
                renderItem={({item}) => <SelectedDocLayout docName={item.name} />}
              />
            ) : null}
            <View
              style={styles.SendProposalButtinsArea}>
              <TouchableOpacity
                onPress={() => this.SubmitProposal()}
                style={styles.MainButtonArea}>
                <Text
                  style={styles.ButtonText}>
                  {CONSTANT.SendProposalUpdate}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.pickMultiple()}
                style={[styles.MainButtonArea,{backgroundColor: '#00cc8d'}]}>
                <Text
                  style={styles.ButtonText}>
                  {CONSTANT.SendProposalSelectFile}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title={CONSTANT.AwesomeAlertTitle}
          message={CONSTANT.AwesomeAlertMessage1}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText={CONSTANT.AwesomeAlertConfirmText}
          confirmButtonColor={CONSTANT.primaryColor}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
        <AwesomeAlert
          show={showSuccessAlert}
          showProgress={false}
          title={CONSTANT.AwesomeAlertTitle}
          message={CONSTANT.AwesomeAlertMessage2}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText={CONSTANT.AwesomeAlertConfirmText}
          confirmButtonColor={CONSTANT.primaryColor}
          onConfirmPressed={() => {
            this.hideSuccessAlert();
          }}
        />
      </View>
    );
  }
}
export default SendProposal;
