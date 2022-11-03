import { CardItemView, MenuAlt } from '../../components'
import React, {useEffect, useState} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Color from '../../constants/colors';
import {changeProductStatus} from '../../store/action';

const ViewList = ( { navigation }) => {

  const dispatch = useDispatch();
  const list = useSelector(state => state.lists.selectedList);
  const {listname, products} = list;

  const addStatus= (item) => { 
    dispatch(changeProductStatus(item));  
    
  }
  
  return (
    <View style={styles.container}>
      <MenuAlt title={'Vista Lista'} />
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{listname}</Text>
      </View>
      <ScrollView>
        <CardItemView item={products} addStatus={addStatus} />
      </ScrollView>
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
    fontSize: 15,
    fontWeight: 'bold',
  },

  titlecontainer: {
    marginHorizontal: 20,
  },

  title:{
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: Color.letter,
    
  }

});


export  default ViewList