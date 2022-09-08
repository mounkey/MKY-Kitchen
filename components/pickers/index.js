import {Picker} from '@react-native-picker/picker';
import React from "react";
import {styles} from './style';

export default function Pickers() {
  const [measure, setMeasure] = useState('');
  return (
    <Picker  style={styles.picker}
      selectedValue = { measure } 
      onValueChange = { (itemValue, itemIndex) =>
      setMeasure(itemValue) }>
      <Picker.Item  label = "Unidad" value = "Unidad" />
      <Picker.Item  label = "Kgr" value = "Kg" />
    </Picker>          
  );

}