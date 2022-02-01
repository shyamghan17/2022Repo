import React from "react";
import Routes from "./src/navigation/Routes";
import { Provider as AuthProvider } from "./src/context/authContext";
import { setNavigatior } from "./src/navigation/NavigationRef";
import { Provider as LocationProvider } from "./src/context/locationContext";


const App = () => {
  return (
    <LocationProvider>
      <AuthProvider>
      <Routes/>
    </AuthProvider>
    </LocationProvider>
    
  );
};

export default App;
