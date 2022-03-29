import { StyleSheet, Dimensions, StatusBar  } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

import * as COLOR from "../components/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  textColorBlack: {
    color: "#000",
    fontSize: 16,
    margin: 5,
    padding: 5
  },
  textColorWhite: {
    color: "#fff",
    fontSize: 16,
    margin: 5,
    padding: 5
  },

  container: {
    marginTop:StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.HOME_BACKGROUND,
    height: windowHeight,
    width: windowWidth
  },
  tableComponent: {
    backgroundColor: COLOR.TABLE_BACKGROUND1,
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight * 0.15,
    width: windowWidth * 0.3,
    borderRadius: 50,
    margin: 5
  },
  title: {
    // height:windowHeight*0.07,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor:'red',
    // width:windowWidth*0.99,
    // borderRadius:20
  },
  titleText: {
    fontWeight: "500",
    fontSize: 20,
    color: COLOR.TITLE_TEXT
  },

  imageStyle: {
    height: 30,
    width: 30
  },
  navigationComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth,
    padding: 10,
    backgroundColor: COLOR.NAVCOMP
  },
  categoriList: {
    flexDirection: "row"
  },
  itemList: {
    flexDirection: "row",
    width: windowWidth * 0.8,
    backgroundColor: COLOR.WHITE,
    padding: 14,
    margin: 4,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: COLOR.BORDER_COLOR,
    borderWidth: 1
  },
  tableView: {
    backgroundColor: COLOR.TABLE_BACKGROUND1,
    margin: 8,
    height: 100,
    width: 100,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLOR.BorderClo,
    borderWidth: 2
  },
  tableViewActive: {
    backgroundColor: COLOR.TABLE_BACKGROUND2,
    margin: 8,
    height: 100,
    width: 100,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLOR.BorderClo,
    borderWidth: 2,
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3
  },

  tableText: {
    color: COLOR.TABLE_TEXT,
    fontSize: 18,
    fontWeight: "500"
  },
  shadowForAll: {
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3
  },
  // category list styles
  cateItems: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5
  },
  buttomNav:{
    justifyContent: "space-between",
    alignItems: "center",
    // flex:1
  }
});
