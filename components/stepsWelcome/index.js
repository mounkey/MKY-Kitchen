import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './style';

const Steps = ({steps}) => {
  console.log(steps);
  return(
    steps.map((item) => (
      <View key={item.id} style= {styles.container}>
        <Text style={styles.font} >{item.name}: {item.step}</Text>
      </View>
    ))
)}


export default Steps;

