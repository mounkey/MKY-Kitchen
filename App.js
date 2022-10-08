import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, { useState } from 'react';

import AppNavigator from './navigation';
import Color  from './constants/colors';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { store } from './store';
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
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={Color.letter} />  
      </View>
    )
  }
  
  const onSelectedEnlarge = ( select, order ) => {
    setOrder(order)
    setSelected(select);
  };

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  ); 
};
