import { listTypes } from '../types';
const { ADD_LIST, DELETE_LIST, SHOW_LIST } = listTypes;

const initialState = {
  list: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      let newList = [];
      if (state.list.find((item) => item.id === action.id)) {
        newList = state.list.map((item) => {
          if (item.id === action.item.id)  
          item.id = action.item.id;
          item.product = action.item.product;
          item.quantity = action.item.quantity;
          item.measure = action.item.measure;
          item.status = action.item.status;          
          return item;
        });
      } else {      
        newList = [...state.list, action.item];
      }
      return {
        ...state,
        list: newList,
      };

    case DELETE_LIST:
      const newListDelete = state.list.filter((item) => item.id !== action.id);  
      return {
        ...state,
        list: newListDelete,
      }

    default:
      return state;
    }
    
  }


  export default listReducer;