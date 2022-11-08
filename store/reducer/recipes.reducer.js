import {recipeTypes} from '../types';

const { SELECT_RECIPE, ALL_RECIPES } = recipeTypes;

const initialState = {
  recipes: [],
  selectRecipes: [],
}

const recipesReducer = (state = initialState, action) => {  
  
  switch(action.type) {

    case ALL_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
      }      
    
    case SELECT_RECIPE:
        return {
          ...state,
          selectRecipes: action.selectedRecipes
        }
    
      default:
        return state;
  }

}





export default recipesReducer;
