import {Button, MenuAlt, Pickers, TT} from '../../components';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useState} from "react";

import Color from "../../constants/colors";
import Navigation from '../../navigation/index';

const ViewWelcome = () => {

  const [recipe, setRecipe] = useState();
  const [ingredient, setIngredient] = useState();

  const renderItemRecipe = ({item}) => {};
  const renderItemIngredient = ({item}) => {};

  return (
    <View style={styles.container}>
      <MenuAlt />
      <Text style={styles.text}>Receta que selecciono </Text>
      <View style={styles.buttonContainer}>
        <Button title="Regresar" bkcolor={Color.primary} color={Color.letter} onPress={() => alert} />
      </View>
      <View style={styles.flatContainer}>
        <FlatList
          data= {recipe}
          renderItem = {renderItemRecipe}
          keyExtractor = {item => item.id}
        />
      </View>
      <View style={styles.flatContainer}>
        <FlatList
          data= {ingredient}
          renderItem = {renderItemIngredient}
          keyExtractor = {item => item.id}
        />
      </View>
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
  
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: Color.letter,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 33,
  },

  flatContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 33,
  },

});

export default ViewWelcome;