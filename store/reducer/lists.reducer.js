import { ADD_LIST } from '../action';
import { listTypes } from '../types';
import { lists }  from '../../data';

const { SECTIONLIST, DELETE_LIST } = listTypes;

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
        updatedList = [...state.lists, item];
    }
    return {
        ...state,
        lists: updatedList,
        
    }

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