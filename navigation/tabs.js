import {Ionicons} from "@expo/vector-icons";
import React from "react";
import StackHomeNavigation  from "./home";
import StackListNavigation  from "./list";
import StackRecipesNavigation  from "./stack";
import color from "../constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator() ;

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName= "HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {          
          color: color.primary,
        },
      }}
    >
       <BottomTab.Screen
        name = "HomeTab"
        component = {StackHomeNavigation}
        options = {{
          title: "Recetas",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name = {focused ? "ios-home" : "ios-home-outline"}
              size = {24}
              color = {color.primary}
            />
          )
        }}
      />

      <BottomTab.Screen
        name = "ListTab"
        component = {StackListNavigation}
        options = {{
          title: "Lista Super",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name = {focused ? "ios-list" : "ios-list-outline"}
              size = {24}
              color = {color.primary}
            />
          )
        }}
      />

      <BottomTab.Screen
        name = "RecipesTab"
        component = {StackRecipesNavigation}
        options = {{
          title: "Camnera",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name = {focused ? "ios-camera" : "ios-camera-outline"}
              size = {24}
              color = {color.primary}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Tabs;

