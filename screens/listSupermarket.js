import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from "react";

import Buttons from '../components/buttons';
import Color from '../constants/colors';
import Menu from '../components/menu';

const ListSupermarket = ( {onSelectedEnlarge, object}) => {
  
  const [order, setorder] = useState(object);
  const [selected, setSelected] = useState(false);
  console.warn(order);

  const onPressEnlarge = () => {
    setSelected(order);
    setSelected(!selected);
    onSelectedEnlarge( selected, order);
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={ item.status == false ? styles.itemText : styles.itemTextTachado}>{item.product + ' - ' + item.quantity + ' - ' + item.measure}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Menu />    
      <View style={styles.buttonContainer2}>
        <Buttons title="Reducir" bkcolor={Color.primary} color={Color.letter} onPress={onPressEnlarge} />
      </View>
      <FlatList 
        data={order}
        renderItem={renderItem}
        keyExtractor = {(item )=> item.id.toString()}
      />
       
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,     
    fontFamily: 'Lato-Regular',
  }, 

  textNomList: {
    marginLeft: 20,
    alignItems: 'baseline',
    fontFamily: 'Lato-Regular',
  },

  textNom: {
    color: Color.letter,
    fontSize: 10,
    fontWeight: 'bold',    
  },

  textContainerTitle: {
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
  },

  textTitle: {
    color: Color.letter,
    fontSize: 30,
    fontWeight: 'bold',
  },

  textPicker: {
    color: Color.letter,
    },  

  TextInputContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },

  TextBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  TextInput: {
    height: 33,
    color: Color.primary,
    backgroundColor: Color.letter,
    fontSize: 15,
    selectionColor: Color.letterº,
    placeholderTextColor: Color.primary,
    marginBottom: 15,
    paddingHorizontal: 10,
  }, 

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    height: 33,
  },

  buttonContainer2: {
    width: '100%',
    alignItems: 'center',
    marginBottom:15,  
    height: 33,
  },

  itemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },

  itemContainer: {
    backgroundColor: Color.letter,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    color: Color.primary,
    fontSize: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemText: {
    textDecorationLine:'none',
  },

  itemTextTachado: {
    textDecorationLine:'line-through',
  },

  itemTextButton: {
    color: Color.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },

});


export  default ListSupermarket;