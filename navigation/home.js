import { Welcome, viewWelcome } from '../screens';

import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackHomeNavigator = () => {
  return (
    <Stack.Navigator
     initialRouteName="Welcome" 
     screenOptions={{ 
      headerStyle: {  
        backgroundColor: colors.primary, 
        }, 
        headerTintColor: colors.letter,
        }}
      > 
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ 
          title: 'Bienvenido'
        }} 
      />
      
      <Stack.Screen 
        name="viewWelcome" 
        component={viewWelcome} 
        options={{
          title: 'Vista Recetas'
          }}
        />
        
    </Stack.Navigator>
  );
};

export default StackHomeNavigator;
