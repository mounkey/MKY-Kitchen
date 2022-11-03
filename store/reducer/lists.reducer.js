//List Reducer

import { listTypes } from '../types';
import { lists }  from '../../data';

const { ADD_LIST,  SELECT_LIST, DELETE_LIST, CHANGE_PRODUCT_STATUS } = listTypes;

const initialState = {
  lists: lists,
  selectedList: null,
  produsts: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_LIST:
      console.log(action.idList, action.nameList, action.product, action.quantity, action.measure, action.status);
      console.log(state.Lists);
      if (Lists.id  === action.idList) {
        console.log ('yes');
        return {
          ...state,
          lists: [
            ...state.lists,
            {
              id: action.idList,
              name: action.nameList,
              products: [
                {
                  id: Math.random().toString(),
                  idlist: action.idList,
                  name: action.product,
                  quantity: action.quantity,
                  measure: action.measure,
                  status: action.status,
                },
              ],
            },
          ],
        };
      }
      else {
        console.log ('no');
        const listIndex = state.lists.findIndex(
          (list) => list.id === action.list[0].idlist
        );
        const newProduct = {
          id: Date.now().toString(),
          idlist: action.list[0].idlist,
          name: action.product,
          quantity: action.quantity,
          measure: action.measure,
          status: action.status,
        };
        const updatedList = { ...state.lists[listIndex] };
        updatedList.products = updatedList.products.concat(newProduct);
        const updatedLists = [...state.lists];
        updatedLists[listIndex] = updatedList;
        return {
          ...state,
          lists: updatedLists,
        };
      }
      
     
          
      
    case SELECT_LIST:
      const indexList = state.lists.findIndex(
        (list) => list.id === action.listId
      );
      if (indexList === -1) return state;
      return {
        ...state,
        selectedList: state.lists[indexList]
      };

    case DELETE_LIST:
      const newListDelete = state.lists.filter((item) => item.id !== action.id);  
      return {
        ...state,
        lists: newListDelete,
      }

    case CHANGE_PRODUCT_STATUS:
      const newList = state.lists.map((item) => {
        item.products.map((product) => {
          if (product.id === action.productId) {
            product.status = !product.status;
          }
          return product;
        }
        );  
        return item;
      });
      return {
        ...state,
        lists: newList,
      }
        
    default:
      return state;
    }
  };
  


  export default listReducer;