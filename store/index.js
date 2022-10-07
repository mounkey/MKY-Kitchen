import { combineReducers, createStore } from "redux";

import { recipesReducer } from "./reducers";

const rootReducer = combineReducers({
  recipes: recipesReducer
});

export default createStore(rootReducer);