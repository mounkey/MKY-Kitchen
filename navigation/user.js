import React from "react";
import {User} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screemOptions={{headerShown: false}}
    >

      <Stack.Screen name="User" component={User} />

    </Stack.Navigator>
  );
};

export default UserNavigator;