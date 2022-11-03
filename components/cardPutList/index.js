import React,{ useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {styles} from "./style";
import {useSelector} from "react-redux";

const CardPutList = ({  idList, removeItem }) => {
  
  const list = useSelector(state => state.lists.lists);
  
  const [status, setStatus] = useState(true)
  const handleStatus = ()=> setStatus(prev => !prev)

  

  return(
    list.filter((item) => item.id === idList).map((item) => (
      item.products.map((product) => (
        <View key={product.id} style={styles.itemContainer}>
          <View>
            <Text style={styles.itemText}>{product.product + '-' + product.quantity + '-' + product.measure}</Text>
          
          </View>
         <TouchableOpacity onPress={() => removeItem( product.id)}>
            <Text style={styles.text}>X</Text>
          </TouchableOpacity>
        </View>
      ))
    ))
  )
}
  

export default CardPutList;


