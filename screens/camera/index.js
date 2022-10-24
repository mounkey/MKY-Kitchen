import { Button, Menu } from '../../components';
import { CardImage, CardTakeImage } from '../../components';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { addPhoto, loadPhotos } from '../../storeReduxToolkit/photo.slice';
import { useDispatch, useSelector } from 'react-redux';

import Color from '../../constants/colors';

const Camera= ({navigation}) => {

  const photos = useSelector((state) => state.photos.photos);
  const dispatch = useDispatch();
  const {image, setImage} = useState("");

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  const renderItem = (itemData) => {
    return (
      <CardImage image = {itemData}/>
    );
  };

    
  const onHandlerImage = (imageUri) => {
    setImage(imageUri);
  };
  
  const onHandlerSubmit = (imagen) => {
    dispatch(addPhoto(image));
  };
  
  return (
    <View style={styles.container}>
      <Menu/>
      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Camera</Text>
      </View>
      <View style={styles.imageContainer}>
        <CardTakeImage onImage= {onHandlerImage} />
      </View>
      <Button title="Submit" onPress={onHandlerSubmit} bkcolor = {Color.primary} color = {Color.letter}/>  
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
        ListEmptyComponent = {ListEmptyComponent}
      />
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

    imageContainer: {
      height: 270,
      width: '100%',
      },

  });

export default Camera;