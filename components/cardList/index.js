import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from "./style";

const CardList = ({ item, addStatus, deleteItem }) => {
  
  return (
    item.map((items) => (
    <View style={styles.itemContainer}>
      <Text style={ item.status == false ? styles.itemText : styles.itemTextTachado}>{items.product + ' - ' + items.quantity + ' - ' + items.measure}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity onPress={() => addStatus(item.id)}>
          <Text style = { styles.itemTextButton}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Text style = { styles.itemTextButton}>Del...</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  ))
}

export default CardList; 