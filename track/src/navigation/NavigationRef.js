import { NavigationActions } from "react-navigation";
let navigation;

export const setNavigatior = (nav) => {
  navigation = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
