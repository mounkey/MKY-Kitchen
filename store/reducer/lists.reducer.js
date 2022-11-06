import { listTypes } from '../types';

const { ADD_LIST,  SELECT_LIST, DELETE_LIST, CHANGE_PRODUCT_STATUS, REMOVE_PRODUCT_LIST } = listTypes;

const initialState = {
  lists: [],
  selectedList: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_LIST:
     // console.log(action.idList, action.nameList, action.product, action.quantity, action.measure, action.status);
     // console.log(state.lists);
    let lastList = state.lists.find(list => list.id === action.idList);
    if (lastList) {
      lastList.products.push({
        id: Date.now().toString(),
        idList: action.idList,
        product: action.product,
        quantity: action.quantity,
        measure: action.measure,
        status: action.status,
      });
      return {
        ...state,
        lists: state.lists.map(list => list.id === action.idList ? lastList : list),
      };
    } else {
      return {
        ...state,
        lists: state.lists.concat({
          id: action.idList,
          listname: action.nameList,
          products: [{
            id: Date.now().toString(),
            idList: action.idList,
            product: action.product,
            quantity: action.quantity,
            measure: action.measure,
            status: action.status,
          }],
        }),
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

      case REMOVE_PRODUCT_LIST:        
        const newListRemove = state.lists.find((item) => item.id === action.idList);
        const newProductRemove = newListRemove.products.filter((item) => item.id !== action.idProduct);
        newListRemove.products = newProductRemove;
        return {
          ...state,
          lists: state.lists.map(list => list.id === action.idList ? newListRemove : list),
        }
        
    default:
      return state;
    }

   
  };
  


  export default listReducer;