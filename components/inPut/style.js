import Colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    input: {
        paddingVertical: 5,
        borderBottomColor: Colors.letter,
        backgroundColor: Colors.letter,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
        marginHorizontal: 10,
    },
    message: {
        marginVertical: 5,
    },
    helperText: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        color: 'Color.primary',
    }
});