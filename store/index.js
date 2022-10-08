import { combineReducers, createStore } from "redux";

import { recipesReducer } from "./reducer";

const rootReducer = combineReducers({
  recipes: recipesReducer
});

export default createStore(rootReducer);