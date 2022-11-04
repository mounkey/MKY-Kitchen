import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

const  Menu = (  ) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Welcome')}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')}  />
                </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Recipes')}>
                     <Image source={require('../../assets/menu1.png')} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Ingredients')}>
                    <Image source={require('../../assets/menu2.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Prepare')}> 
                    <Image source={require('../../assets/menu3.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Other')}>
                    <Image source={require('../../assets/menu4.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Camera')}>
                    <Image source={require('../../assets/menu5.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('StoragePhoto')}>
                    <Image source={require('../../assets/menu6.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Menu;