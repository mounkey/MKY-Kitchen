import * as ImagePicker from "expo-image-picker";

import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {Button, MenuAlt}from "../../components/";
import React, {useState} from "react";

import  Colors from "../../constants/colors";
import { ImageSave } from "../../store/action/photo.action";
import { useDispatch } from "react-redux";

const Camera = ({navigation}) =>{

    const [pickUrl, setPickUrl] = useState();
    const [imagePatch, setImage] = useState("");
    const dispatch = useDispatch();

    const verifyPermissions = async () =>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
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

        setPickUrl(image.uri);
        setImage(image.uri);
    };

    const savePhoto = () =>{
        dispatch(ImageSave(imagePatch));
        navigation.navigate("StoragePhoto");
        setPickUrl();
    }

    const galeryPhotos = () =>{
        navigation.navigate("StoragePhoto")
    }

    return(
        <View style={styles.container}>
            <MenuAlt title = {'Camara'} />
            <View style={styles.containerImage}>
                {!pickUrl ? (
                    <Text>there is no photo</Text>
                ) : (
                    <Image style={styles.image} source={{uri: pickUrl}} />
                )}
            </View>
            <View style ={styles.container}>
                <Button title = {'Tomar Froto'} onPress={onHandleTakePhoto} bkcolor= {Colors.primary} color = {Colors.letter} />
                <Button title = {'Salvar Foto'} onPress={savePhoto} bkcolor= {!pickUrl ? Colors.grey : Colors.primary} color = {Colors.letter} disabled = "{!pickUrl}"/>
                <Button title = {'Galeria'} onPress={galeryPhotos} bkcolor= {Colors.primary} color = {Colors.letter} />
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: Colors.primary,
      //justifyContent: "center",
      //alignItems: "center",
  },
  containerImage:{
      backgroundColor: Colors.primary,
      width: '100%',
      height: 330,
      borderColor: Colors.letter,
      color: Colors.letter,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      marginTop:30,
  },
  button:{
      backgroundColor: Colors.primary,
      width: '100%',
      height: 60,
      borderRadius: 15,
      borderColor: Colors.letter,
      color: Colors.letter,
      borderWidth: 2,
      backgroundColor: Colors.secondary,
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
  },
  image:{
      width: "100%",
      height: "100%",
  },
})
export default Camera;
