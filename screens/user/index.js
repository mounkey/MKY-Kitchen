import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useReducer, useState } from "react";
import { UPDATED_FORM, onFocusOut, onInputChange } from "../../utils/forms";
import { signIn, signUp } from "../../store/action/";

import Colors from "../../constants/colors";
import textBoxLogin from "../../components/";
import { useDispatch } from "react-redux";

const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
}



const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM: 
        const { name, value, hasError, error, touched, isFormValid} = action.data;
        return {
            ...state,
            [name]: {
                ...state[name],
                value,
                hasError,
                error,
                touched,
            },
            isFormValid
        }
        default:
            return state;
    }
}

const User = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';

    const onHandleSubmit = () => {
        const { password, email } = formState;
        dispatch(isLogin ? signIn(email.value ,password.value ) : signUp(email.value, password.value));
    };

    const onHandleChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }

    const onHandleBlur = (value, type) => {
        onFocusOut(type, value, dispatchFormState, formState)
    }
    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
            <View style={ styles.container}>
                <Text style={styles.title}>{title}</Text>
                <textBoxLogin 
                    style={styles.input}
                    label="Email"
                    placeholder="ingrese su email"
                    value={formState.email.value}
                    placeholderTextColor={Colors.grey}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    onBlur={(e) => onHandleBlur(e.nativeEvent.text, 'email')}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                />
                <textBoxLogin
                    style={styles.input}
                    label="Password"
                    placeholderTextColor={Colors.grey}
                    value={formState.password.value}
                    placeholder="ingrese su contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    onBlur={(e) => onHandleBlur(e.nativeEvent.text, 'password')}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                />
                <Button 
                    title={messageAction}
                    color={Colors.letter}
                    onPress={onHandleSubmit}
                    disabled={!formState.isFormValid}
                />
                <View style={styles.prompt}>
                <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.promptMessage}>{message}</Text>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: Colors.letter,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.primary,
        height: 300,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        marginVertical: 5,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginVertical: 5,
    },
    input: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
    },
    promptButton: {
        backgroundColor: Colors.letter,
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    prompt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 14,
        color: Colors.primary,
        fontFamily: 'Lato-Regular',
    }
});

export default User;