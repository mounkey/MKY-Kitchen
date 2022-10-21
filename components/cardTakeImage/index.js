import * as  ImagenPicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

import Color from "../../constants/colors";
import { styles } from "./style";

const CardTakeImage = (onTakeImage) => {

  const { pickUrlImage, setPickerUrlImage } = useState();

  const verifyPermissionsCamera = async () => {
    const result = await ImagenPicker.requestCameraPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la camara", [{ text: "Ok" }]);
      return false;
    }
    return true;
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissionsCamera();
    if (!hasPermission) {
      return;
    }
    const image = await ImagenPicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickerUrlImage(image.uri);
    onTakeImage(image.uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {!pickUrlImage ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickUrlImage }} />
        )}
      </View>
      <Button title="Tomar foto" color={Color.primary} onPress={takeImageHandler} />
    </View>
  );
};

export default CardTakeImage;



