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
  imageContainer: {
    width: '50%',
    justifyContent: 'center',
    paddingtop:10,
  },
  image: {
    width: '80%',
    height: 90,
    borderRadius: 10,
  },
  textContainer: {
    width: '60%', 
  },
  title: {
    color: Color.letter,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 1,
    
    height: 33,
  },
  titledate: {
    
  },

});


    