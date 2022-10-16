import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import {styles} from './style';

const PhotoWelcome = ({ photo }) => {
  return (
    photo.map((item) => (
    <View style={styles.container}>
      <View style={styles.photoContainer} key= {item.id}>
        <Image source={{ uri:item.photo }} style={styles.image} />
      </View>
    </View>
    ))
  );
}

export default PhotoWelcome;
