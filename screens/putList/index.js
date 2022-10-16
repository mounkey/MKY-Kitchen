import {Button, MenuAlt, Pickers, TT} from '../../components';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../constants/colors";
import { addList } from "../../store/action";

const PutList = ({navigation}) => {

  const dispatch = useDispatch();
  const list = useSelector(state => state.lists.Lists);

  const onChangeProduct = (text) => { setProduct(text.replace(/[^ a-zA-Z ]/g, '')) }; // Validar solo texto
  const onChangeQuantity = (text) => { setQuantity(text.replace(/[^0-9]/g, '')) };// Validar solo numeros
  
  const [listName, setListName] = useState(''); 
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState('Seleccione una ...');
  const [order, setorder] = useState([]);

  const date = () => {
    const date = Date.now();
    const hoy = new Date(date);
    const day = hoy.toLocaleString();
    return day;
  }

  return (
    <ScrollView style={styles.container}>
      <MenuAlt title={'Agregar Lista '} />
      <View style={styles.dateContainer}>
        <Text style={styles.date}> Nombre de la Lista:{date()} </Text>
      </View>
      <View style={styles.TextInputContainer}>
        <View style={styles.TextBoxContainer}>
          <TT placeholder="Producto" value={product} onChangeText={onChangeProduct}/>
          <TT placeholder="Cantidad" value={quantity} onChangeText={onChangeQuantity}/>
        </View>
        <Text style={styles.textPicker}> Medidas - {measure}</Text>
        <Pickers stateFirst={measure} stateSecond={setMeasure}></Pickers>
      
        <View style={styles.buttonContainer}>
          <Button title="Agregar" bkcolor={Color.primary} color={Color.letter} onPress={() => Alert} />
        </View>
      </View>
    </ScrollView> 
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,
    fontFamily: 'Lato-Regular',
  },

  dateContainer: {
    marginHorizontal:20,
    marginVertical: 5,
    fontSize: 20,
  },

  date: {
    fontSize: 16,
    color: Color.letter,
    fontFamily: 'Lato-Regular',
  },
});

export default PutList;
