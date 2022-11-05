import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

import { styles } from "./style";

const CardTakeImage = ({onImage}) => {
  const [pickedUrl, setPickedUrl] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("you need to grant camera permissions to use this app", [{ text: "Okay" }]);
      return false;
    }
    return true;
  };

  const onHandleTakePhoto = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    const {uri}= image;
    setPickedUrl(uri);
    onImage(uri);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar foto" onPress={ onHandleTakePhoto}  style={styles.button}  />
    </View>
  );
};

export default CardTakeImage;



