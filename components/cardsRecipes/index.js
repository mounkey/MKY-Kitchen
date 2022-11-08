import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const CardsRecipes = ({ item,  onSelected }) => {
  
  return (
      <View style={styles.container}>
        <View style = {styles.imageContainer}>
          <Image style={styles.image} source={{ uri:item.imagen }} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titledate}>
            <Text style={styles.title}>{item.date}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={styles.buttomContainer}>
            <TouchableOpacity onPress={() => onSelected(item.id)}>
              <Text style={styles.title}>Ver receta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default CardsRecipes;