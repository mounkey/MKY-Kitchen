import { Text, View } from "react-native";

import React from "react";
import { styles } from "./style";

const LabelLogin = ({
    label,
    children,
    style,
    subLabel,
    subLabelStyle,
}) => {
    return (
        <View style={styles.container}>
            <Text style={[style.label, style]}>{label}</Text>
            {children}
            {subLabel && <Text style={[styles.subLabel, subLabelStyle]}>{subLabel}</Text>}
        </View>
    )
}

export default LabelLogin;