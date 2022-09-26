import { Additional, Camera, Ingredients, ListSupermarket, Recipes, SupermarketList, ViewWelcome, Welcome } from '../screens';

import React from 'react';
import { createNavitiveStackNavigator } from '@react-navigation/native';

const Stack = createNavitiveStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ViewWelcome" component={ViewWelcome} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="Ingredients" component={Ingredients} />
      <Stack.Screen name="Additional" component={Additional} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="SupermarketList" component={SupermarketList} />
      <Stack.Screen name="ListSupermarket" component={ListSupermarket} />
    </Stack.Navigator>
  );
}

export default ShopNavigator;