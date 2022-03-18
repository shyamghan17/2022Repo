import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { withNavigation, DrawerActions } from "react-navigation";
import SimpleHeader from "../Header/SimpleHeader";
import * as CONSTANT from "../Constants/Constant";
import styles from "../Constants/Styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntIcon from "react-native-vector-icons/AntDesign";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class AboutUs extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SimpleHeader HeaderText={CONSTANT.AboutUs} />
          <View>
            <Text style={styles.box}>
              We will provide you a perfect employee with a perfect contract.
            </Text>

            <View
              style={{
                margin: width * 0.02,
                marginVertical: 2,
                borderBottomColor: "#ef2d8d",
                borderBottomWidth: 2,
                justifyContent: "center",
                alignSelf: "center"
              }}
            />

            <Text
              style={{
                fontSize: 14,
                textAlign: "justify",
                marginHorizontal: "4%",
                marginVertical: "2%"
              }}
            >
              At UIZ, we believe in technology and international collaboration
              to change the face of the world. UIZ is an international BPO
              service provider for a Virtual Employees.
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: "2%"
              }}
            >
              <View style={styles.accolumn}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>100+</Text>
                <Text>Active Projects</Text>
              </View>

              <View style={styles.accolumn}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>100%</Text>
                <Text>Customer Feedback</Text>
              </View>

              <View style={styles.accolumn}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>80+</Text>
                <Text>Active Employees</Text>
              </View>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "center",
                  fontSize: 18,
                  borderRadius: 8,
                  borderColor: "#ef2d8d",
                  borderWidth: 1,
                  padding: 8,
                  marginVertical: 6,
                  shadowColor: "#ef2d8d",
                  shadowOffset: { width: 0.5, height: 0.5 },
                  shadowOpacity: 0.6,
                  shadowRadius: 5
                }}
              >
                What's great about us?
              </Text>
            </View>

            <View style={[{ flexDirection: "column" }]}>
              <View style={styles.row}>
                <MaterialIcons name="create" style={styles.materialIconn} />
                <Text style={styles.box}>Quality Work</Text>
              </View>
              <Text style={styles.text}>
                Employee.to has the largest pool of qualified employees in the
                world.
              </Text>

              <View style={styles.row}>
                <AntIcon name="gift" style={styles.materialIconn} />
                <Text style={styles.box}>Fast Hiring Process</Text>
              </View>
              <Text style={styles.text}>
                Instantly receive no-obligation rates from our talented
                employees.{" "}
              </Text>

              <View style={styles.row}>
                <AntIcon name="solution1" style={styles.materialIconn} />
                <Text style={styles.box}>Browse portfolios</Text>
              </View>
              <Text style={styles.text}>
                Browse their prior work samples and read their profile reviews
                to find a specialists you can trust.
              </Text>

              <View style={styles.row}>
                <MaterialIcons name="timeline" style={styles.materialIconn} />
                <Text style={styles.box}>Track progress</Text>
              </View>
              <Text style={styles.text}>
                With our time tracker and mobile app, you can stay up to date
                and on the go. Always be aware of what employees are doing.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(AboutUs);
