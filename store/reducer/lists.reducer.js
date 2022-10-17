//List Reducer

import { listTypes } from '../types';
import { lists }  from '../../data';

const { ADD_LIST,  SELECT_LIST, DELETE_LIST, CHANGE_PRODUCT_STATUS } = listTypes;

const initialState = {
  lists: lists,
  selectedList: null,
  
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
    let updatedLists = [...state.lists];
    if(state.lists.find(item => item.id === action.item.id)) {
      updatedLists = state.lists.map(item => {
          if(item.id === action.item.id){
            item.id = action.item.id+1;
            item.list = Date.now().toString();
            return item;
          }            
      });
      } else {
          const item = {...action.item, id: action.item.id+1, list: Date.now().toString()};
          updatedLists = [...state.lists, item];
      }
      return {
          ...state,
          lists: updatedLists,            
      };
     

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