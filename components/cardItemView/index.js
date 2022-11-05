import React, {useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {styles} from "./style";

const CardItemView = ({ item, addStatus }) => {  

  const [status, setStatus] = useState(true)
  const handleStatus = ()=> setStatus(prev => !prev)

  return (
    item.map((items) => (
      <View style={styles.itemContainer} key={items.id}>
        <Text style={ items.status === false ? styles.itemText : styles.itemTextTachado}>{items.product + ' - ' + items.quantity + ' - ' + items.measure}</Text>
        <View style={styles.itemButtons}>
          <TouchableOpacity onPress={ () => { addStatus(items.id); handleStatus()}}>
            <Text style = { styles.itemTextButton}>Tachar</Text>
          </TouchableOpacity>
        </View>
      </View>
  ) )  
)};

export default CardItemView;