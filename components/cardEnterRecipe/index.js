import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const CardEnterRecipe = ({ item, onDeleted }) => {
    return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.titledate}>
              <Text style={styles.title}>{item.id + ' - '  +item.name +' - '+ item.description + ' - ' + item.fecha}</Text>
            </View>
            <View style={styles.buttomContainer}>
              <TouchableOpacity onPress={() => onDeleted(item)}>
                <Text style={styles.title}>Ver receta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
  }

  export default CardEnterRecipe;