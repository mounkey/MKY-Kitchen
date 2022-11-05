import Color from '../../constants/colors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Color.letter,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    color: Color.primary,
    fontSize: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  itemTextButton: {
    color: Color.primary,
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textItems: {
    color: Color.primary,
    fontSize: 15,
  },
});
