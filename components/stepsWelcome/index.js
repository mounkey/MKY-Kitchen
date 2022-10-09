import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './style';

const Steps = ({steps}) => {
  return (
    <View style ={styles.container}>
      {steps.map((step, index) => (
        <Text key={index} style={styles.font}>{step.step}</Text>
      ))}
    </View>
  );
}

export default Steps;