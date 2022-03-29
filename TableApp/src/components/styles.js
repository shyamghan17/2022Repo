import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import * as COLOR from "../components/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  textColorBlack: {
    color: "#000",
    fontSize: 16,
    fontWeight:'600',
    fontStyle:'italic'
  },
  textColorWhite: {
    color: "#fff",
    fontSize: 16,
  },

  container: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.HOME_BACKGROUND,
    height: windowHeight,
    width: windowWidth,
    flex: 1
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
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
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
    backgroundColor: COLOR.HOME_BACKGROUND
  },
  catList: {
    flexDirection: "row",

  },
  itemList: {
    flexDirection: "row",
    width: windowWidth -10,
    backgroundColor: COLOR.ITEM_COLOR,
    padding: 14,
    margin: 4,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: COLOR.BORDER_COLOR
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
    borderWidth: 2
  },

  tableText: {
    color: COLOR.TABLE_TEXT,
    fontSize: 18,
    fontWeight: "bold"
  },
  shadowForAll: {

    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 0.3
  },
  // category list styles
  cateItems: {
    backgroundColor: COLOR.CATEGORY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical:8,
    padding:12
  },
  buttNav: {
    width: windowWidth - 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 40
  }
});
