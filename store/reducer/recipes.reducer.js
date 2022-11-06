import {recipeTypes} from '../types';

const { SELECT_RECIPE, ALL_RECIPES } = recipeTypes;

const initialState = {
  recipes: [],
  selectedRecipe: null,
}

const recipesReducer = (state = initialState, action) => {  
  switch(action.type) {
    case ALL_RECIPES:
      return {
        recipes: action.recipes,
      }
      
    case SELECT_RECIPE:
      const indexRecipe = state.recipes.findIndex(
        (recipe) => recipe.id === action.recipeId
      );
      if(indexRecipe === -1) return state;
        return {
          ...state,
          selectedRecipe: state.recipes[indexRecipe]
        }
      default:
        return state;
  }
}
export default recipesReducer;
