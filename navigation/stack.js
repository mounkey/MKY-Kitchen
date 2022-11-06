import {Camera, Ingredients, Other, Prepare, Recipes, StoragePhoto} from '../screens';

import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Camera" screenOptions={{ headerStyle: {  backgroundColor: colors.primary, }, headerTintColor: colors.letter,}}> 
      <Stack.Screen name="Recipes" component={Recipes} options={{title: 'Recetas'}}/>
      <Stack.Screen name="Ingredients" component={Ingredients} options={{title:'Ingredientes'}} />
      <Stack.Screen name="Prepare" component={Prepare} options={{title:'Preparacion'}}/>
      <Stack.Screen name="Other" component={Other} options={{title: 'Adicionales'}} />
      <Stack.Screen name="Camera" component={Camera} options={{title: 'Camara'}} />
      <Stack.Screen name= "StoragePhoto" component={StoragePhoto} options={{title: 'Galeria Fotos'}} />
    </Stack.Navigator>
  );
};

export default StackNavigator;