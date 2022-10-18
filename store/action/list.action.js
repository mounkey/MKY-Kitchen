import {listTypes} from '../types';

const { ADD_LIST, DELETE_LIST, SELECT_LIST, CHANGE_PRODUCT_STATUS } = listTypes;

export const addlist= (list, order) => {
  return {
    type: ADD_LIST,
    list,
    order: order,
  };
}

export const removeList = (id) => {
  return {
    type: DELETE_LIST,
    id: id,
  };
}

export const showList = (id) => {
  return {
    type: SELECT_LIST,
    listId: id,
  };
}

export const changeProductStatus = (id) => {
  return {
    type: CHANGE_PRODUCT_STATUS,
    productId: id,    
  };
}
 