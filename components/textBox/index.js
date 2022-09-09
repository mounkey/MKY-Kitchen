import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

import {styles} from './style';

export default function TextBox({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.TextInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
}