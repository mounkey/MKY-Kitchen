import {Camera, Ingredients, List, Other, Recipes, Welcome} from '../screens';

import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Recipes" screenOptions={{ headerStyle: {  backgroundColor: colors.primary, }, headerTintColor: colors.letter,}}> 
      <Stack.Screen name="Recipes" component={Recipes} options={{title: 'Recetas'}}/>
      <Stack.Screen name="Ingredients" component={Ingredients} options={{title:'Ingredientes'}} />
      <Stack.Screen name="List" component={List} options={{title:'Lista Supermercado'}}/>
      <Stack.Screen name="Other" component={Other} options={{title: 'Adicionales'}} />
      <Stack.Screen name="Camera" component={Camera} options={{title: 'Camara'}} />
    </Stack.Navigator>
  );
};

export default StackNavigator;