import {URL_API} from '../../firebase';
import {listTypes} from '../types';

const { ADD_LIST, DELETE_LIST, SELECT_LIST, CHANGE_PRODUCT_STATUS, REMOVE_PRODUCT_LIST } = listTypes;

export const addlist= (list, idList, nameList, product, quantity, measure, status) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/lists.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          listname: nameList,
          products: [
            {
              id: Date.now().toString(),
              idlist: idList,
              product: product,
              quantity: quantity,
              measure: measure,
              status: status,
            },
          ],
        }),
      });
      const resData = await response.json();
      dispatch({
        type: ADD_LIST,
        list,
        idList,
        nameList,
        product,
        quantity,
        measure,
        status
      });
    } catch (err) {
      throw err;
    }
  };
};

export const removeList = (id) => {
  return async(dispatch) =>{
    try {
      const response = await fetch(`${URL_API}/list.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      dispatch({
        type: DELETE_LIST,
        id: id,
      });
    } catch (error) {
      console.log(error);
    }   
  };
}

export const selectList = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/list.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      const test = Object.keys(data).map(key => data[key]);
      const list = test;
      
      dispatch({
        type: SELECT_LIST,
        list: list,
      });
    } catch (error) {
      console.log(error);
    }
  }
}


export const showList = (id) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`${URL_API}/list.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      const test = Object.keys(data).map(key =>data[key]);
      const list = test.filter(item => item.id === id);


      dispatch({
        type: SELECT_LIST,
        list: list,
      });
      } catch (error) {
        console.log(error);
      }
    }
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
 