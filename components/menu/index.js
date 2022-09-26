import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './style';

export default function Menu({navigation}) {

    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}  />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Recipes')}>
                     <Image source={require('../../assets/menu2.png')} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('addIngredients')}>
                    <Image source={require('../../assets/menu3.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('addAdditional')}>
                    <Image source={require('../../assets/menu5.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Camera')}>
                    <Image source={require('../../assets/menu1.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SupermarketList')}>
                    <Image source={require('../../assets/menu4.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}