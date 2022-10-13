import {listTypes} from '../types';

const {  DELETE_LIST, SHOW_LIST } = listTypes;

export const removeList = (id) => {
  return {
    type: DELETE_LIST,
    id: id,
  };
}

export const showList = (id) => {
  return {
    type: SHOW_LIST,
    id: id,
  };
}
 