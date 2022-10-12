import { applyMiddleware, combineReducers, createStore } from "redux";

import { recipesReducer, listsReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  lists: listsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));  