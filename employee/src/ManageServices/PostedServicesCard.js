import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  ImageBackground,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import * as CONSTANT from "../Constants/Constant";
class PostedServicesCard extends Component {
  state = {
    default_color_badge: "",
    storedValue: "",
    storedType: "",
    profileImg: "",
    type: "",
    id: "",
    iconColor: "#dddddd",
    showAlert: false,
    isLoading: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "#000", borderTopRightRadius: 4 , borderTopLeftRadius: 4}}>
          <ImageBackground
            style={{ height: 120, opacity: 0.6, zIndex: 1, borderTopRightRadius: 4, borderTopLeftRadius: 4}}
            source={this.props.imageUri_profile}
          ></ImageBackground>
        </View>
        {/* <Image
                  style={{ height: 40, marginLeft: 10, width: 40, borderRadius: 20, borderColor: '#fff', borderWidth: 2, marginTop: -20, zIndex: 1 }}
                  source={this.props.imageUri_profile}
                /> */}
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <AntIcon name="check" color={"#0ed200"} size={12} />
            <Text style={{ fontSize: 10, marginLeft: 2 }}>
              {this.props.service_name}
            </Text>
          </View>
          <Text numberOfLines={1} style={{ color: "#323232", fontSize: 14 }}>
            {this.props.service_title}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontWeight: "700", color: "#fe736e", fontSize: 14 }}>
              {this.props.service_price}
            </Text>
            <Text
              style={{ fontSize: 10, marginLeft: 3, alignSelf: "flex-end" }}
            >
              {CONSTANT.ManageServicesStartingfrom}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <AntIcon name="star" color={"#FECB02"} size={12} />
            <Text style={{ fontSize: 10, marginLeft: 2 }}>
              {this.props.service_rating}/5
            </Text>
            <Text style={{ fontSize: 10, textAlign: "right" }}>
              {" "}
              {CONSTANT.PostedServicesinqueue}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            {/* <View style={{width:"35%" , alignItems:'center' , justifyContent:'center' , backgroundColor:'green'  , borderRadius:5 , marginHorizontal:5 , padding: 5, justifyContent:"center"}}>
                      <AntIcon
                      name="edit"
                      color={"#fff"}
                      size={15} />
                      </View> */}

            <TouchableOpacity
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: CONSTANT.TextColorRed,
                borderRadius: 5,
                marginHorizontal: 5,
                padding: 5,
                justifyContent: "center",
              }}
            >
              <AntIcon name="delete" color={"#fff"} size={15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default PostedServicesCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
  },
});
