import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, { useState } from 'react';

import Color  from './constants/colors';
import ListSuper from './screens/listSupermarket';
import { StatusBar } from 'expo-status-bar';
import Super from './screens/supermarketList';
import { useFonts } from 'expo-font';

export default function App() {

  //useState
  const [selected, setSelected] = useState(false);
  const [order, setorder] = useState([]);

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
  
  const onSelectedEnlarge = (select) => {
    setSelected(select);
  };
  
  let content = <Super onSelectedEnlarge={onSelectedEnlarge} object = {order}/>;
  
  if (!selected) {
    content = <Super onSelectedEnlarge={onSelectedEnlarge} object = {order}/>;
  }
  else
  {
    content = <ListSuper onSelectedEnlarge={onSelectedEnlarge} object = {order}/>;
  }

  return (
    <View style={styles.container}>
      {content}
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
