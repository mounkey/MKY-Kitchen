import { Text, View } from "react-native";

import React from "react";
import {styles} from './style';

const Other =({others} ) => {
  console.log(others);
  return(
    others.map((item) => (
      <View key={item.id} style= {styles.container}>
        <Text style={styles.font} >{item.name}: {item.step}</Text>
      </View>
    ))
)}

  export default Other;