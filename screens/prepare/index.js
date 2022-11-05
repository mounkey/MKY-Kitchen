import { StyleSheet, Text, View } from 'react-native';

import Color from '../../constants/colors';
import { Menu } from '../../components';
import React from 'react';

const Prepare= ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menu/>
      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Agregar Preparacion  </Text>
      </View>
     
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.primary ,
     
    },
    textContainerTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    textTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Color.letter,
    },
  });

export default Prepare;