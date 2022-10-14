import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from "./style";

const cardItemView = ({ item, addStatus }) => {  
  return (
    item.map((items) => (
    <View style={styles.itemContainer}>
      <Text style={ item.status == false ? styles.itemText : styles.itemTextTachado}>{items.product + ' - ' + items.quantity + ' - ' + items.measure}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity onPress={() => addStatus(item.id)}>
          <Text style = { styles.itemTextButton}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  ))
)};

export default cardItemView;