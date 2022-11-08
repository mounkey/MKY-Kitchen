import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './style';

const Steps = ({steps}) => {
  console.warn('Steps', steps);
  return(
    steps?.map((item) => (
      <View key={item.id} style= {styles.container}>
        <Text style={styles.font} >{item.id}: {item.step}</Text>
      </View>
    ))
)}


export default Steps;

