import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import{styles} from './style.js';

const CardsRecipes = ({item, onSelected, deletelist}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style = {styles.itemText}>{item.id + ' - ' + item.list }</Text>
    <View style={styles.itemButtons}>
      <TouchableOpacity onPress={() => onSelected(item.id)}>
        <Text style = { styles.itemTextButton}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deletelist(item.id)}>
        <Text style = { styles.itemTextButton}>Del...</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

  export default CardsRecipes;

