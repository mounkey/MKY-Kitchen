import * as Font from 'expo-font';

import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';

import Buttons from './components/buttons';
import Color from './constants/colors';
import Menu from './components/menu';
import Pickers from './components/Pickers';
import { StatusBar } from 'expo-status-bar';
import TT from './components/textBox';
import { useFonts } from 'expo-font';

export default function App() {

  //useState

  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState('Seleccione una ...');
  const [order, setorder] = useState([]);

  //funciones

  const onChangeProduct = (text) => { setProduct(text) };
  const onChangeQuantity = (text) => { setQuantity(text) };
  const onPressButton = () => {
    if (product != '' && quantity != 0 && measure != 'Seleccione una ...') {
      setorder([...order, { id: Date.now().toString(),  product: product, quantity: quantity, measure: measure, status: false }]);
      setProduct('');
      setQuantity(0);
      setMeasure('Seleccione una ...');
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={ item.status == false ? styles.itemText : styles.itemTextTachado}>{item.product + ' - ' + item.quantity + ' - ' + item.measure}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity onPress={() => addStatus(item.id)}>
        <Text style = { styles.itemTextButton}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Text style = { styles.itemTextButton}>Del...</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  
  const addStatus = (id) => {
    const newOrder = order.map((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setorder(newOrder);
  };

  const deleteItem = (id) => {
    const newOrder = order.filter((item) => item.id != id);
    setorder(newOrder);
  };

  const hola = 'hola mundo';


  //useRef

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  // cargar Fonts

  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });

  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={Color.letter} />  
      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <Menu />
      
      <View style={styles.textNomList}>     
        <Text style={styles.textNom}> Supermercado </Text> 
      </View>
      
      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Lista de Supermercado </Text>
      </View>

      <View style={styles.TextInputContainer}>
        <TT placeholder="Producto" value={product} onChangeText={onChangeProduct}/>
        <TT placeholder="Cantidad" value={quantity} onChangeText={onChangeQuantity}/>
         <Text style={styles.textPicker}> Medidas - {measure}</Text>
        <Pickers stateFirst={measure} stateSecond={setMeasure}></Pickers>
      </View>
      <View style={styles.buttonContainer}>
        <Buttons title="Agregar" bkcolor={Color.primary} color={Color.letter} onPress={onPressButton} />
      </View>
      
    <FlatList 
      data={order}
      renderItem={renderItem}
      keyExtractor = {(item )=> item.id.toString()}
    />
    
      <StatusBar style="auto" />

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
    marginBottom: 20,
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
