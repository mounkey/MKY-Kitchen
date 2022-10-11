import {URL_API} from '../../firebase';
import { listTypes } from '../types/list.types';
const { ADD_LIST , REMOVE_LIST, SHOW_LIST } = listTYpes;

export const addList = (list) => {
  return {
    type: ADD_LIST,
    id: list,
  };
}

export const removeList = (id) => {
  return {
    type: REMOVE_LIST,
    id: id,
  };
}

export const showList = (items) => {
  return async (dispatch) => {
    try {
        const response = await fetch(`${URL_API}/list/list.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: Date.now(),
                items,
            })
        })

        const result = await response.json();

        dispatch({
            type: SHOW_LIST,
            result: result,
        })
    } catch (error) {
        console.log(error.message);
    }
  }
}
