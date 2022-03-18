import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, AsyncStorage, ActivityIndicator } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import axios from "axios";
import ViewOverflow from 'react-native-view-overflow';
import AntIcon from "react-native-vector-icons/AntDesign";
import * as CONSTANT from '../Constants/Constant';
import styles from '../Constants/Styles';
import HTML from 'react-native-render-html';
class CompleteJobLayout extends Component {
  state = {
    default_color_badge: "",
    storedValue: "",
    storedType: "",
    profileImg: "",
    type: "",
    id: "",
    iconColor: '#dddddd',
    showAlert: false,
    isLoading: false,
  };
  componentDidMount() {
    this.getUser();
    var user_id = this.props.fav_user_id;
  }
  getUser = async () => {
    try {
      const storedValue = await AsyncStorage.getItem("full_name");
      const storedType = await AsyncStorage.getItem("user_type");
      const profileImg = await AsyncStorage.getItem("profile_img");
      const type = await AsyncStorage.getItem("profileType");
      const id = await AsyncStorage.getItem("projectUid");
      if (storedValue !== null) {
        this.setState({ storedValue });
      } else {
        // alert('something wrong')
      }
      if (storedType !== null) {
        this.setState({ storedType });
      } else {
        //  alert('something wrong')
      }
      if (profileImg !== null) {
        this.setState({ profileImg });
      } else {
        //  alert('something wrong')
      }
      if (type !== null) {
        this.setState({ type });
      } else {
        //  alert('something wrong')
      }
      if (id !== null) {
        this.setState({ id });
      } else {
        //  alert('something wrong')
      }
    } catch (error) {
      // Error saving data
      // alert(error)
    }
  };
  UpdateFav = async () => {
    var user_id = this.props.fav_job_user_id;
    const fav_id = await AsyncStorage.getItem("projectUid");
    axios
      .post(
        CONSTANT.BaseUrl + "user/favorite",
        {
          id: fav_id,
          favorite_id: user_id,
          type: "_saved_projects"
        }
      )
      .then(async response => {
        if (response.status == "200") {
          this.setState({
            iconColor: CONSTANT.primaryColor,
            isLoading: false
          });
          alert("Favorite Updated Successfully");
        } else if (response.status == "203") {
          alert("Cannot update favorite/ Network Error");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  render() {
    const { showAlert, storedType, iconColor, isLoading } = this.state;
    var fav_color = this.props.Fav_Color;
    return (
      <View>
        <View style={[styles.section, {paddingRight:0,}]}>
          <ViewOverflow style={[styles.CompleteJobLayoutmainStyle(this.props.featuredCompleteJobColor), styles.Elevation, {height: 152}]}>
            <View
              style={{
                width: 0,
                height: 0,
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderRightWidth: 25,
                borderTopWidth: 25,
                borderTopLeftRadius: 4,
                borderRightColor: "transparent",
                borderTopColor: this.props.featuredCompleteJobColor != "" ? this.props.featuredCompleteJobColor : "#fff"
              }}
            />
            <Image
              style={styles.CompleteJobLayoutFeaturedImgStyle}
              source={require('../Images/Icon-16.png')}
            />
            <View style={[styles.CompleteJobLayoutshadow, {height: 130, justifyContent: 'space-between',}]}>
              <View>
                <Text numberOfLines={1}
                  style={styles.NameTextStyle}
                >
                  {this.props.Completejobname}
                </Text>
              </View>
              <View>
                <Text
                  style={styles.SectionHeadingTextStyle}
                >
                  {this.props.Completejobtitle}
                </Text>
              </View>
              { this.props.Completejoblevel != '' &&
                <View
                  style={styles.CompleteJobLayoutInfoArea}
                >
                  <Text style={[styles.ParagraphTextStyle,{ color: "#00cc8d", width:13, textAlign:'center' }]}>€</Text>
                  <Text
                    style={[styles.ParagraphTextStyle, {paddingLeft:10}]}
                  >
                    {this.props.Completejoblevel}
                  </Text>
                </View>
              }
              {this.props.Completejobcountry != '' &&
                <View
                  style={styles.CompleteJobLayoutInfoArea}
                >
                  <Image
                    style={styles.CompleteJobLayoutFlagImgStyle}
                    source={this.props.jobflagimageUri}
                  />
                  <Text
                    style={[styles.ParagraphTextStyle, {paddingLeft:10}]}
                  >
                    {this.props.Completejobcountry}
                  </Text>
                </View>
              }
              <View
                style={styles.CompleteJobLayoutInfoArea}
              >
                <AntIcon
                  name="folder1"
                  color={"#3498db"}
                  size={13}
                />
                {this.props.Completejobrate === "" ?
                  <View 
                    style={{
                      flexDirection:"row", 
                      justifyContent:"flex-start", 
                      paddingLeft:10
                    }}>
                    <HTML
                      containerStyle={{marginRight: 4,}}
                      baseFontStyle={styles.ParagraphTextStyle}
                      html={this.props.Completejobhourlyhours}
                    />
                    <Text style={styles.ParagraphTextStyle}>
                      {CONSTANT.HomeCompleteJobLayoutRate}{' '}
                    </Text>
                    <Text style={styles.ParagraphTextStyle}>
                      {this.props.Completejobestimatedhours}{' '}
                    </Text>
                    <Text style={styles.ParagraphTextStyle}>
                      {CONSTANT.HomeCompleteJobLayoutHours} 
                    </Text>
                  </View>
                  :
                  <View style={{paddingLeft:10}}>
                    <HTML 
                      baseFontStyle={styles.ParagraphTextStyle}
                      html={this.props.Completejobrate} 
                    />
                  </View>
                }
              </View>
              { this.props.Completejobduration != '' &&
                <View
                  style={styles.CompleteJobLayoutInfoArea}
                >
                  <AntIcon
                    name="clockcircleo"
                    color={CONSTANT.primaryColor}
                    size={13}
                  />
                  <Text
                    style={[styles.ParagraphTextStyle, {paddingLeft:10}]}
                  >
                    {this.props.Completejobduration}
                  </Text>
                </View>
              }
            </View>
            <View
              style={styles.CompleteJobLayoutIconArea}
            >
              {storedType != "" ? (
                <View>
                  {fav_color == "yes" ? (
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'#fff'
                      }}
                    >
                      <AntIcon
                        name="heart"
                        color={CONSTANT.primaryColor}
                        size={17}
                        style={styles.CompleteJobLayoutIconStyle}
                      />
                    </View>
                  ) : (
                      <TouchableOpacity
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor:'#fff'
                        }}
                        activeOpacity={0.7}
                        onPress={this.UpdateFav}
                      >
                        <AntIcon
                          name="heart"
                          color={this.state.iconColor}
                          size={17}
                          style={styles.CompleteJobLayoutIconStyle}
                        />
                      </TouchableOpacity>
                    )}
                </View>
              ) : (
                  <TouchableOpacity
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor:'#fff'
                    }}
                    activeOpacity={0.7}
                    onPress={() => {
                      Alert.alert(CONSTANT.AwesomeAlertMessage3);
                    }}
                  >
                    <AntIcon
                      name="heart"
                      color={"#dddddd"}
                      size={17}
                      style={styles.CompleteJobLayoutIconStyle}
                    />
                  </TouchableOpacity>
                )}
            </View>
          </ViewOverflow>
        </View>
      </View>
    );
  }
}
export default CompleteJobLayout;
