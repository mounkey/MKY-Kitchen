import Color from '../../constants/colors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  button: {
    borderWidth: 1,
    borderColor: Color.letter,
    borderRadius: 5,
    width: '100%',
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',  
    marginTop: 20,  
  },

  textButton: {
    fontSize: 20,
  },  

});