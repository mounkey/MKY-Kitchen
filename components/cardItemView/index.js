import React, {useEffect, useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {styles} from "./style";

const CardItemView = ({ item, addStatus }) => {   

 


  return (
    item.map((items) => (
    <View style={styles.itemContainer} key={items.id}>
      <Text style={ items.status == false ? styles.itemText : styles.itemTextTachado}>{items.product + ' - ' + items.quantity + ' - ' + items.measure}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity  onPress= {() => addStatus(items.id)} >
          <Text style = { styles.itemTextButton} >Tachar</Text>          
        </TouchableOpacity>
      </View>
    </View>
  ))
)};

export default CardItemView;