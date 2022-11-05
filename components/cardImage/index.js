import { Image, View } from "react-native";

import React from "react";
import { styles } from "./style";

const CardImage = ({ image }) => {
  return (
    image.map (item => {
      <View style={styles.container} key ={item.id}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
    })

  );
};

export default CardImage;
