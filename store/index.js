import { applyMiddleware, combineReducers, createStore } from "redux";
import { listsReducer, photoReducer, recipesReducer } from "./reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  lists: listsReducer,
  photos: photoReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));  