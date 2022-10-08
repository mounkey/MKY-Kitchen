import {recipeTypes} from '../types';
import {recipes} from '../../data';

const { SELECT_RECIPE } = recipeTypes;

const initialState = {
  recipes: recipes,
  selectedRecipe: null
}

const recipesReducer = (state = initialState, action) => {  
  switch(action.type) {
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
