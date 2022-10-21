import { Button, Menu } from '../../components';
import { CardImage, CardTakeImage } from '../../components';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Color from '../../constants/colors';

const Camera= ({navigation}) => {

  const {image, setImage} = useState("");

  const onHandlerImage = (image) => {
    setImage(image);
  };

  const onHandlerSubmit = () => {
    console.log(image);
  };
  return (
    <View style={styles.container}>
      <Menu/>
      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Camera</Text>
      </View>
      <CardTakeImage onTakeImage = {onHandlerImage} />
      <Button title="Guardar Imagen" onPress={onHandlerSubmit} bkcolor= {Color.primary} color={Color.letter} />
      <ScrollView style={styles.scrollContainer}>
      
      </ScrollView>
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

export default Camera;