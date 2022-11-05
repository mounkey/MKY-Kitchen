import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../firebase";

import { userTypes } from '../types';

const {SIGN_UP, SIGN_IN, RECOVERY_PASSWORD} = userTypes;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        const errorResData = await response.json();
      }
      const resData = await response.json();
      dispatch({
        type: SIGN_UP,
        token: resData.idToken,
        userID: resData.localId,
      });
    } catch (err) {
      console.log(error);
    }
  }
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      
      const resData = await response.json();
      dispatch({
        type: SIGN_IN,
        token: resData.idToken,
        userID: resData.localId,
      });
    } catch (err) {
      console.log(error);
    }
  }
};

export const recoveryPassword = (email) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requestType: 'PASSWORD_RESET',
          email,
        }),
      });
      
      const resData = await response.json();
      dispatch({
        type: RECOVERY_PASSWORD,
        token: resData.idToken,
        userID: resData.localId,
      });
    } catch (err) {
      console.log(error);  
    }
  }
}