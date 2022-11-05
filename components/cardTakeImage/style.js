import Color from '../../constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Primary,
  },
  
  imageContainer:{
    width: '100%',
    height: 200,
    backgroundColor: Color.Primary,
    marginVertical:20,
    borderRadius: 10,
    borderColor: Color.White,
    borderWidth: 1,
  },

  image: {
    width: '100%',
    height: '100%',
  },
  button:{
    width: '100%',
    height: 50,
    backgroundColor: Color.Primary,
    marginVertical:20,
    borderRadius: 10,
    borderColor: Color.letter,
    borderWidth: 1,
  
  },  
});

