import {recipeTypes} from '../types';
const {SELECT_RECIPE} = recipeTypes;

export const selectRecipe = (id) => {
  return {
    type: SELECT_RECIPE,
    recipeId: id,
  };
}