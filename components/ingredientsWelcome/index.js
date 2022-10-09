import { Text, View } from "react-native";

import React from "react";
import {styles} from './style';

const IngredientsWelcome = ({ ingredients }) => {
  return(    
    ingredients.map((item, index) => (
      <View key={index} style= {styles.container}>
        <Text style={styles.font} >{item.name}: - {item.quantity} - {item.unit}</Text>
      </View>
    ))
  )}

  export default IngredientsWelcome;