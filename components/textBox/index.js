import { StyleSheet, TextInput } from "react-native";

import React from "react";
import {styles} from './style';

export default function TextBox({ placeholder, value }) {
  return (
    <TextInput
      style={styles.TextInput}
      placeholder={placeholder}
      //onChangeText={onChangeText}
      value={value}
    />
  );
}