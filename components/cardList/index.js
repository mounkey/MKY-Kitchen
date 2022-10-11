import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from "./style";

const cardList = ({ item, addStatus, deleteItem }) => {
  
  return (
    <View style={styles.itemContainer}>
      <Text style={ item.status == false ? styles.itemText : styles.itemTextTachado}>{item.product + ' - ' + item.quantity + ' - ' + item.measure}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity onPress={() => addStatus(item.id)}>
          <Text style = { styles.itemTextButton}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Text style = { styles.itemTextButton}>Del...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default cardList; 