import { StyleSheet, Text, View, StatusBar } from "react-native";

import InshortTabs from "./src/components/InshortTabs";

export default function App() {
  return (
    <View style={{...styles.container, backgroundColor:'#282c35'}}>
<InshortTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:21,

  }
});
