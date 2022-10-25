import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, { useState } from 'react';

import AppNavigator from './navigation';
import Color  from './constants/colors';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { init } from './db';
import store  from './store';
import { useFonts } from 'expo-font';

export default function App() {


  //funciones


  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });

  if(!loaded) {
    return (
      
        <ActivityIndicator size="large" color={Color.letter} />  
    
    )
  }
  
  const onSelectedEnlarge = ( select, order ) => {
    setOrder(order)
    setSelected(select);
  };
  init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log(`Database failed to initialize ${err}`);
  });


  return (
   
    <Provider store={store}>
      <AppNavigator/>
      <StatusBar style="auto" />
    </Provider>
  ); 

  
};
