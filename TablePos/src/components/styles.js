import { StyleSheet, Dimensions, StatusBar } from "react-native";

import * as COLOR from "../components/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    backgroundColor: "#A4C3B2",
    opacity: 0.8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: "#A4C3B2",
    shadowOffset: { width: -0.1, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 15,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Hujan",
  },
  tableComponent: {
    height: 80,
    width: 95,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#A4C3B2",
    opacity: 0.8,
    borderRadius: 20,
    shadowColor: "#A4C3B2",
    shadowOffset: { width: -0.1, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 15,
  },
  title: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLOR.TITLE_TEXT,
  },

  imageStyle: {
    height: 30,
    width: 30,
  },
  navigationComponent: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth - 18,
    padding: 10,
    backgroundColor: COLOR.NAVCOMP,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
  },
  catList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 13,
  },
  itemList: {
    flexDirection: "row",
    width: windowWidth - 40,
    backgroundColor: COLOR.ITEM_COLOR,
    paddingVertical: 15,
    paddingHorizontal:10,
    margin:5,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#A4C3B2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  tableView: {
    backgroundColor: COLOR.TABLE_BACKGROUND1,
    margin: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLOR.BorderClo,
    borderWidth: 1,
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
  },

  tableText: {
    padding: 10,
    color: COLOR.TABLE_TEXT,
    fontSize: 25,
    fontFamily: "orange",
  },
  shadowForAll: {
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 0.3,
  },
  // category list styles
  cateItems: {
    backgroundColor: COLOR.CATEGORY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 12,
  },
  textColorWhite: {

    fontFamily: "SquarePeg",
    fontSize: 22,
  },

  listText: {
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Caveat",
  },
});
