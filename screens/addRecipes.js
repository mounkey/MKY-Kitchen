import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

import Botones from '../components/buttons';
import Color from '../constants/colors';
import Menu from '../components/menu';
import TextBox from '../components/textBox';

const addRecipes = () => {

  //useState
  const [nameRecipe, setNameRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [recipes, setRecipes] = useState([]);
  //funciones

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
      setRecipes([...recipes, { id: Date.now().toString(), name: nameRecipe, description: description, date: date() }]);
      setNameRecipe('');
      setDescription('');
    }
    console.warn(nameRecipe, description, recipes);
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name + ' - ' + item.description + ' - ' + item.date}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Text style = { styles.itemTextButton}>Del...</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const deleteItem = (id) => {
    const newRecipes = recipes.filter((item) => item.id != id);
    setRecipes(newRecipes);
  };

  return(
    <View style = {styles.container}>
      
      <Menu/>

      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Agregar Receta </Text>
      </View>

      <View style = {styles.TextInputContainer} >
        <TextBox placeholder = 'Nombre de la receta' onChangeText = {onChangeTextNameRecepe} value = {nameRecipe} />
        <TextBox placeholder = 'Descripcion' onChangeText = {onChangeTextDescription} value = {description} />
      </View>
      <View style = {styles.textContainerTitle2}>
        <Text style = {styles.date}>{date()}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Botones title="Agregar" bkcolor={Color.primary} color={Color.letter} onPress={onPressButton} />
      </View>
    
      <View style={styles.flatListContainer}>
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
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

  flatListContainer: {
    marginTop: 20,
    marginBottom: 20,
  },

});

export default addRecipes;