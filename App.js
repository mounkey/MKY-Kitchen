import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, { useState } from 'react';

import Color  from './constants/colors';
import { StatusBar } from 'expo-status-bar';
import Super from './screens/supermarketList';
import { useFonts } from 'expo-font';

export default function App() {

  //useState


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


  return (
    <View style={styles.container}>
     <Super></Super>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,     
    fontFamily: 'Lato-Regular',
  }, 

});
