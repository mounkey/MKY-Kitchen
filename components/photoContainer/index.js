import { Image, Text, View } from "react-native";

import React from "react";
import { styles } from "./style";

const PhotoContainer = ({item, image}) =>{
    return(
    <View style={styles.container}>
        <View style={styles.containerPhoto}>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
    </View>
    )
}

export default PhotoContainer;
