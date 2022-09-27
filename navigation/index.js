import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./stack";

const AppNavigator= () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;