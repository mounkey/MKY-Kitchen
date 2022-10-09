import Color from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignContent:'space-between',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  photoContainer: {
    height:  100,
    width: 100,
 
    borderWidth: 1,
    borderColor: Color.letter,
  },
  image: {
    height: 100,
    width: 100,
  },
});