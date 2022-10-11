import {Button, CardList, MenuAlt, Pickers, TT} from '../../components';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Color from '../../constants/colors';

const SupermarketList = ( {navigation,}   ) => {

  //useState

  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState('Seleccione una ...');
  const [order, setorder] = useState([]);
  const [selected, setSelected] = useState(false);

  //funciones

  const onChangeProduct = (text) => { setProduct(text.replace(/[^ a-zA-Z ]/g, '')) }; // Validar solo texto
  const onChangeQuantity = (text) => { setQuantity(text.replace(/[^0-9]/g, '')) };// Validar solo numeros
  const onPressButton = () => {
      if (product != '' && quantity != 0 && measure != 'Seleccione una ...') {
        setorder([...order, { id: Date.now().toString(),  product: product, quantity: quantity, measure: measure, status: false }]);
      setProduct('');
      setQuantity(0);
      setMeasure('Seleccione una ...');
    }
  };

  
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

  const onPressEnlarge = () => {
    onSelectedEnlarge(!selected, order);
  };
  
  //useRef

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }  

  return (
    <ScrollView style={styles.container}>
      
      <MenuAlt title={'Lista Super'} />
      
      <View style={styles.textNomList}>     
        <Text style={styles.textNom}> Supermercado </Text> 
      </View>
      
      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Lista de Supermercado </Text>
      </View>

      <View style={styles.TextInputContainer}>
        <View style={styles.TextBoxContainer}>
          <TT placeholder="Producto" value={product} onChangeText={onChangeProduct}/>
          <TT placeholder="Cantidad" value={quantity} onChangeText={onChangeQuantity}/>
        </View>
        <Text style={styles.textPicker}> Medidas - {measure}</Text>
        <Pickers stateFirst={measure} stateSecond={setMeasure}></Pickers>
      
        <View style={styles.buttonContainer}>
          <Button title="Agregar" bkcolor={Color.primary} color={Color.letter} onPress={onPressButton} />
        </View>
        <View style={styles.buttonContainer2}>
          <Button title="Ampliar" bkcolor={Color.primary} color={Color.letter} onPress={() => navigation.navigate('viewList')} />
        </View>

      </View>
      <View style={styles.flatListContainer}>
        <CardList item={order} addStatus={addStatus} deleteItem={deleteItem} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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

});

export default SupermarketList;
