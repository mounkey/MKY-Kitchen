import { List, PutList, viewList } from '../screens';

import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={{ headerStyle: {  backgroundColor: colors.primary, }, headerTintColor: colors.letter,}}> 
      <Stack.Screen name="List" component={List} options={{ title: 'Lista Supermercado'}} />
      <Stack.Screen name="PutList" component={PutList} options={{ title: 'Agregrar Lista '}} />
      <Stack.Screen name="viewList" component={viewList} options={{ title: 'Vista Lista '}} />
    </Stack.Navigator>
  );
};

export default StackListNavigator;