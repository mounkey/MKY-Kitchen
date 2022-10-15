import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../constants/colors";
import React from "react";
import { addList } from "../../store/action";

const PutList = ({navigation}) => {

}

const stryle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,
    fontFamily: 'Lato-Regular',
  },
});

export default PutList;
