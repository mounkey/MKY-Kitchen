import { URL_API } from '../../firebase';
import { recipeTypes } from '../types';

const { SELECT_RECIPE, ALL_RECIPES } = recipeTypes;

export const allRecipes = () =>{
  return async(dispatch) =>{
    try {

    const response = await fetch(`${URL_API}/recipes.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    const test = Object.keys(data).map(key => data[key]);
    const recipes = test;

    dispatch({
      type: ALL_RECIPES,
      recipes,
    });
    }catch(error) {
      console.log(error);
    }
  }
}

export const selectRecipe = (id) => {  
  
  return async(dispatch) => {
    try{
      const response = await fetch (`${URL_API}/recipes.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();  
      const test = Object.keys(data).map(key => data[key]);
      const recipes = test.filter(item => item.id === id);
      
      
      dispatch({
        type: SELECT_RECIPE,
        selectedRecipes: recipes,
      });
      
    }catch(error) {
      console.log(error);
    }
  }
}
