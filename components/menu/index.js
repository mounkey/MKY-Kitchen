import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React from 'react';
import { styles } from './style';

export default function Menu() {

    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}  />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                     <Image source={require('../../assets/menu2.png')} /> 
                </TouchableOpacity>
                <Image source={require('../../assets/menu3.png')} />
                <Image source={require('../../assets/menu5.png')} />
                <Image source={require('../../assets/menu1.png')} />
                <Image source={require('../../assets/menu4.png')} />
            </View>
        </View>
    );
}