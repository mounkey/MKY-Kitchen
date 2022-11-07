import {recipeTypes} from '../types';

const { SELECT_RECIPE, ALL_RECIPES } = recipeTypes;

const initialState = {
  recipes: [],
  selectedRecipe: [],
}

const recipesReducer = (state = initialState, action) => {  
  
  switch(action.type) {

    case ALL_RECIPES:
      return {
        recipes: action.recipes,
      }      
    
    case SELECT_RECIPE:
      return {
        selectedRecipe: action.recipes,
      }
    
      default:
        return state;
  }
  
}



export default recipesReducer;
