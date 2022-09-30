import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import  TabNavigation  from "./tabs";
//import StackNavigator from "./stack";


const AppNavigator= () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;