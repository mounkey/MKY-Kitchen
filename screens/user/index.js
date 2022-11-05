import { Button, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useReducer, useState } from "react";
import {UPDATED_FORM, onFocusOut, onPutChange} from '../../utils/forms';
import { signIn, signUp } from "../../store/action/";

import Colors from "../../constants/colors";
import {InPut} from "../../components/";
import { MenuAlt } from '../../components/index';
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
        onPutChange(type, value, dispatchFormState, formState)
    }

    const onHandleBlur = (value, type) => {
        onFocusOut(type, value, dispatchFormState, formState)
    }
    return (
        <View style={styles.outContainer}>
        <MenuAlt title = { 'Login' }/>
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
            <View style={ styles.container}>
                <Text style={styles.title}>{title}</Text>
                <InPut
                    style={styles.input}
                    label="Email"
                    placeholder="ingrese su email"
                    value={formState.email.value}
                    placeholderTextColor={Colors.letter}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    onEndEditing={(e) => onHandleBlur(e.nativeEvent.text, 'email')}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                />
                <InPut
                    style={styles.input}
                    label="Password"
                    placeholderTextColor={Colors.letter}
                    value={formState.password.value}
                    placeholder="ingrese su contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    onEndEditing={(e) => onHandleBlur(e.nativeEvent.text, 'password')}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                />
                <Button 
                    title={messageAction}
                    color={Colors.primary}
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
        </View>
    )
}

const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
        
    },
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginTop:-160,
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.letter,
        height: 300,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        marginVertical: 5,
        textAlign: 'center',
        color: Colors.primary,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginVertical: 5,
    },
    input: {
        paddingLeft: 10,
        margintop: 25,
        marginVertical: 15,
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