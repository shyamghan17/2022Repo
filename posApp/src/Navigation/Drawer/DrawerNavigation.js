import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../Screen/Home/HomeScreen";
import DrawerComponent from "../../Component/DrawerComponent";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator

      drawerContent={props => <DrawerComponent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
