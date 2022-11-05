import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import{styles} from './style.js';

const CardsListView = ({item, onSelected, deletelist}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style = {styles.itemText}>{item.id + ' - ' + item.listname }</Text>
    <View style={styles.itemButtons}>
      <TouchableOpacity onPress={() => onSelected(item.id)}>
        <Text style = { styles.itemTextButton}>Select...</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deletelist(item.id)}>
        <Text style = { styles.itemTextButton}>Del...</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

  export default CardsListView;

