import { Text, View } from "react-native";

import React from "react";
import {styles} from './style';

const IngredientsWelcome = ({ ingredients }) => {
  console.log(ingredients)
  return(    
    ingredients.map((item) => (
      <View key={item.id} style= {styles.container}>
        <Text style={styles.font} >{item.name}: - {item.quantity} - {item.unit}</Text>
      </View>
    ))
  )}

  export default IngredientsWelcome;