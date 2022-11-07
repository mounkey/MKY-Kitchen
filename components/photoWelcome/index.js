import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import {styles} from './style';

const PhotoWelcome = ({ Photo }) => {
  return (
    Photo.map((item) => (
    <View  key= {item.id} style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={{ uri:item.photo }} style={styles.image} />
      </View>
    </View>
    ))
  );
}

export default PhotoWelcome;
