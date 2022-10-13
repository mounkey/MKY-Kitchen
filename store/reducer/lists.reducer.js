import { listTypes } from '../types';
import { lists }  from '../../data';

const { SECTIONLIST, DELETE_LIST } = listTypes;

const initialState = {
  lists: lists,
  selectedList: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SECTIONLIST:
      const indexList = state.lists.findIndex(
        (list) => list.id === action.listid
      );
      if (indexList === -1) return state;
      return {
        ...state,
        selectedList: state.lists[indexList],
      };

    case DELETE_LIST:
      const newListDelete = state.lists.filter((item) => item.id !== action.id);  
      return {
        ...state,
        lists: newListDelete,
      }

    default:
      return state;
    }
    
  }


  export default listReducer;