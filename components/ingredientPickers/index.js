import { Picker } from '@react-native-picker/picker';
import React from "react";
import { styles } from "./style";

export default function IngredientPickers({ stateFirst, stateSecond }) {

  return (

    <Picker
      style={styles.picker}
      selectedValue={stateFirst}
      onValueChange={(itemValue, itemIndex) => stateSecond(itemValue)}
    >

      <Picker.Item label="Seleccione una ..." value="Seleccione una ..." />
      <Picker.Item label="Kg" value="Kg" />
      <Picker.Item label="Litros" value="Litros" />
      <Picker.Item label="Pizca" value="Unidad" />
      <Picker.Item label="Cucharadas" value="Paquetes" />

    </Picker>
    
  );
};