import { CardsRecipes, MenuAlt } from '../../components';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect} from 'react';
import { allRecipes, selectRecipe } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';

import Color from '../../constants/colors';

const Welcome= ({navigation, route}) => {

  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipes.recipes);

  useEffect(() =>{
    dispatch(allRecipes());
  }, [dispatch]);  
  
  const onSelected = (id) => {
    dispatch(selectRecipe(id)); 
    navigation.navigate('viewWelcome');
  } 
  

  const renderItem = ({item}) => <CardsRecipes item={item} onSelected={onSelected} />

  return ( 
    <View style={styles.container}>
      <MenuAlt title = {'Recetas'} />
      <View style={styles.textContainer}>
        <Text style= {styles.text}>Bienvenido a la App de Recetas de Cocina</Text>
      </View>
      <View style = {styles.buttonContainer}>
      </View>
      <FlatList
        data= {recipe}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
      />
      
    </View >

  );
}

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
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 33,
  },

});

export default Welcome;
