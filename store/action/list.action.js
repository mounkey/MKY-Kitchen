import {listTypes} from '../types';

const { ADD_LIST, DELETE_LIST, SELECT_LIST, CHANGE_PRODUCT_STATUS, REMOVE_PRODUCT_LIST } = listTypes;

export const addlist= (list, idList, nameList, product, quantity, measure, status) => {
  return {
    type: ADD_LIST,
    list,
    idList,
    nameList,
    product,
    quantity,
    measure,
    status,
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

export const removeProduct = (idList, idProduct) => {
  return {
    type: REMOVE_PRODUCT_LIST,
    idList: idList,
    idProduct: idProduct,
  };  
}
 