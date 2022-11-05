import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import  TabNavigation  from "./tabs";
import  UserNavigator  from "./user";
import {useSelector} from "react-redux";

//import StackNavigator from "./stack";


const AppNavigator= () => {
  const isLoggedIn = useSelector((state) => state.user.userID);
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigation /> : <UserNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;