import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';

import Buttons from './components/buttons';
import Menu from './components/menu';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import TT from './components/textBox';

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
      setorder([...order, { id: Date.now(),  product: product, quantity: quantity, measure: measure }]);
      setProduct('');
      setQuantity(0);
      setMeasure('Seleccione una ...');
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.product + ' - ' + item.quantity + ' - ' + item.measure}</Text>
    </View>
  )

  //useRef

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <View style={styles.container}>
      
      <Menu />
      
      <View style={styles.textNomList}>     
        <Text style={styles.textNom}>Lista del 06/09/2022 Supermercado</Text> 
      </View>
      
      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Lista de Supermercado </Text>
      </View>

      <View style={styles.TextInputContainer}>
        <TT placeholder="Producto" value={setProduct} onChangeText={onChangeProduct}/>
        <TT placeholder="Cantidad" value={setQuantity} onChangeText={onChangeQuantity}/>
         <Text style={styles.textPicker}> Medidas - {measure}</Text>
        <Picker  style={styles.picker}
         selectedValue = { measure } 
         onValueChange = { (itemValue, itemIndex) =>
          setMeasure(itemValue) }>
          <Picker.Item  label = "Unidad" value = "Unidad" />
          <Picker.Item  label = "Kgr" value = "Kg" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <Buttons title="Agregar" bkcolor="#6E04BF" color="#ffffff" onPress={onPressButton} />
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
    backgroundColor: '#6E04BF',
    color: '#fff',     
  }, 

  textNomList: {
    marginLeft: 20,
    alignItems: 'baseline',
  },

  textNom: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',    
  },

  textContainerTitle: {
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
  },

  textTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  TextInputContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },

  TextInput: {
    height: 33,
    color: '#6E04BF',
    backgroundColor: '#fff',
    fontSize: 15,
    selectionColor: '#fff',
    placeholderTextColor: '#6E04BF',
    marginBottom: 15,
  },

  textPicker: {
  color:'#fff',
  },  
  
  itemPicker: {
    color: '#fff',
  },
  
  picker: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    backgroundColor: '#fff',          
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    height: 33,
  },

  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    color: '#6E04BF',
    fontSize: 15,
    borderRadius: 5,
  },
  itemText: {
    textDecorationLine:'none',
  },

  itemTextTachado: {
    textDecorationLine:'line-through',
  },
});
