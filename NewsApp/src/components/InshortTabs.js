import { useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigation from "./TopNavigation";

const Tab = createMaterialTopTabNavigator();

const InshortTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "First", title: "Discover" },
    { key: "Second", title: "News" }
  ]);
  const renderScene = SceneMap({
    First: DiscoverScreen,
    Second: NewsScreen
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => 
      <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};
export default InshortTabs;
