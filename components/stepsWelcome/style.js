import Color from '../../constants/colors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,
    fontFamily: 'Lato-Regular',
    marginHorizontal: 20,
  },
  font: {
    alignItems: 'flex-start',
    color: Color.letter,
    fontFamily: 'Lato-Regular', 
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 7,
  },
});



