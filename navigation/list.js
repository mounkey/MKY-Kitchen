import { List, Vista_List } from '../screens';

import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={{ headerStyle: {  backgroundColor: colors.primary, }, headerTintColor: colors.letter,}}> 
      <Stack.Screen name="List" component={List} options={{ title: 'Lista Supermercado'}} />
      <Stack.Screen name="VistaList" component={Vista_List} options={{ title: 'Lista Supermercado'}} />
    </Stack.Navigator>
  );
};

export default StackListNavigator;