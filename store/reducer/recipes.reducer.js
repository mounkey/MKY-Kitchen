import {recipeTypes} from '../types';
import {recipes} from '../data/recipes.data';

const {SELECT_RECIPE} = recipeTypes;

const initialState = {
  recipes: recipes,
  selectedRecipe: null
}

const recipesReducer = (state = initialState, action) => {  
  switch(action.type) {
    case SELECT_RECIPE:
      const indexCategory = state.recipes.findIndex(
        (recipe) => recipe.id === action.recipeId
      );
      if(indexCategory === -1) return state;
        return {
          ...state,
          selectedRecipe: state.recipes[indexCategory]
        }
      default:
        return state;
  }
}
export default recipesReducer;
