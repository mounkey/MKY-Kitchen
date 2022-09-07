import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import Menu from './src/components/menu';
import { StatusBar } from 'expo-status-bar';

export default function App() {
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
        <TextInput style={styles.TextInput} 
        placeholder="Nombre del producto"
        backgroundColor= '#ffffff' />  
            <TextInput style={styles.TextInput} 
        placeholder="Cantidad"         
        backgroundColor= '#ffffff' />  
            <TextInput style={styles.TextInput} 
        placeholder="medida"         
        backgroundColor= '#ffffff' />  
      </View>

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
});
