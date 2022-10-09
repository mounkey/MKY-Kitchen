import { Text, View } from "react-native";

import React from "react";
import {styles} from './style';

const Other =({others} ) => {
  return(
    others.map((item, index) => (
      <View key={index} style= {styles.container}>
        <Text style={styles.font} >{item.name}: {item.step}</Text>
      </View>
    ))
)}

  export default Other;