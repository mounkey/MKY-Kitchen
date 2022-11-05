import {Button, CardEnterRecipe, Menu, Pickers, TTFull, TextArea} from '../../components';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Color from '../../constants/colors';

const Recipes = ({navigation}) => {

  //useState
  const [nameRecipe, setNameRecipe] = useState('');
  const [description, setDescription] = useState('');

  //funciones

  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipes.recipes);

  const date = () => {
    const date = Date.now();
    const hoy = new Date(date);
    const day = hoy.toDateString();
    return day;
  }

  const onChangeTextNameRecepe = (text) => { setNameRecipe(text.replace(/[^ a-zA-Z ]/g, '')) }; // Validar solo texto
  const onChangeTextDescription = (text) => { setDescription(text.replace(/[^ a-zA-Z ]/g, '')) };// Validar texto
  const onPressButton = () => {
    if (nameRecipe != '' && description != '') {
      setNameRecipe('');
      setDescription('');
    }
  };

  const onDeleted =() => {
    alert
  }

  const renderItem = ({item}) => <CardEnterRecipe item= {item} onDeleted = {onDeleted}/>
  return(
    <View style = {styles.container}>
      
      <Menu/>

      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Agregar Receta </Text>
      </View>

      <View style = {styles.textContainerTitle2}>
        <Text style = {styles.date}>{date()}</Text>
      </View>

      <View style = {styles.TextInputContainer} >
        <TTFull placeholder = 'Nombre de la receta' onChangeText = {onChangeTextNameRecepe} value = {nameRecipe} />
      </View>

      <View style = {styles.TextInputContainer}>
        <TextArea placeholder = 'Descripcion' onChangeText = {onChangeTextDescription} value = {description} />
      </View>
    
      <View style={styles.buttonContainer}>
        <Button title="Agregar" bkcolor={Color.primary} color={Color.letter} onPress={onPressButton} />
      </View>
      <View style= { styles.flatListContainer}>
        <FlatList 
          data= {recipe}
          renderItem = {renderItem}
          keyExtractor = {item => item.id}
        />
      </View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,     
    fontFamily: 'Lato-Regular',
  }, 

  textContainerTitle: {
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
  },

  textContainerTitle2: {
    marginTop: 10,
    marginLeft: 20,
    marginStart: 20,
    alignItems: 'flex-start',
  },

  textTitle: {
    color: Color.letter,
    fontSize: 30,
    fontWeight: 'bold',
  },

  date: {
    top: 5,
    fontSize: 20,
    color: Color.letter,
  },


  TextInputContainer: {
    marginTop: 10,
    marginHorizontal: 10,    
  },
  
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    height: 33,
  },
  flatListContainer: {
    marginTop: 30,
    
  },

});

export default Recipes;