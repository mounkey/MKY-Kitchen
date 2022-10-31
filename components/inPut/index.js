import { Text, TextInput, View } from "react-native";

import LabelLogin from "../labelLogin";
import React from "react";
import { styles } from "./style";

const InPut = ({
    editable,
    children,
    value,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    hasError,
    error,
    touched,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <LabelLogin {...props}>
                <TextInput 
                    {...props}
                    style={styles.input}
                    editable={editable}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                />
            </LabelLogin>
            {hasError && touched && (
                <View style={styles.message}>
                    <Text style={styles.helperText}>{error}</Text>
                </View>
            )}
        </View>
    )
}

export default InPut;