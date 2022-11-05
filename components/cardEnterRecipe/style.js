import Color from '../../constants/colors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 container: {  
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: Color.primary,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: Color.letter,
  marginBottom: 10,
  paddingLeft:15,
  paddingtop:15,

  },
 
  textContainer: {
    width: '90%', 
  },
  title: {
    color: Color.letter,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    
  },
  buttonContainer: {
    width: '10%',
    alignItems: 'center',
    marginTop: 1,
    height: 33,
  },
});