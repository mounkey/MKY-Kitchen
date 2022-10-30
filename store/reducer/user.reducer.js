import { userTypes } from '../types';

const {SIGN_UP, SIGN_IN, RECOVERY_PASSWORD} = userTypes;
const initialState = {
  token: null,
  userID: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userID: action.userID,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userID: action.userID,
      };
    case RECOVERY_PASSWORD:
      return {
        ...state,
        token: action.token,
        userID: action.userID,
      };
    default:
      return state;
  }
}

export default userReducer;