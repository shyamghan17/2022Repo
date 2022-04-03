//Button Colors

export const ITEM_COLOR = "#e66150";
export const SHADOWCOLOR = "#A4C3B2";
export const CATEGORY_COLOR = "#b4e14a";
export const HOME_BACKGROUND = "#e0ffff";
export const ITEM_TEXT_COLOR = "#fff";

export const BUTTON_BACKGROUND = "#FE715E";
export const OPTIONS_COLOR = "#EFA99F";
export const SHADOWCOLORS = "#F5F5F5";
export const BUTTON_TEXT = "#F5A65B";
export const WHITE = "#ffffff";
export const TABLE_BACKGROUND1 = "#EFECF4";
export const TABLE_BACKGROUND2 = "#EAF4F4";
export const TITLE_TEXT = "#000";
export const TABLE_TEXT = "#000";
export const BORDER_COLOR = "#000000";
export const NAVCOMP = "#BFB6BB";

//#6B9080
//#A4C3B2
//#CCE3DE
//#EAF4F4
//#F6FFF8
import { Text, View, StyleSheet } from "react-native";
import React from "react";
// import { styles } from "./styles";

const TableComponent = ({ tableName }) => {
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Text style={styles.tableText}>
          {/* {tableName} */}
          table name
        </Text>
      </View>
    </View>
  );
};

export default TableComponent;
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#EfECF4"
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ebecf4",
    shadowColor:'#454d65',
    shadowOffset:{height:5},
    shadowOpacity:0.2,
    zIndex:10

  }
});
