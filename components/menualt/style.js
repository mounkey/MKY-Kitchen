import Color from "../../constants/colors";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  
  header: {
    marginTop: 62,
    flexDirection: 'row',
  },

  imageContainer: {
    marginLeft:5,
  },

  logo: {
    width: 100,
    height: 140,
  },  

  menuContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 15,
    marginTop:19,
  },
  title: {
    fontSize: 30,
    color: Color.letter,
  },
  
});