import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ShopNavigator from "./shop";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default Navigation;