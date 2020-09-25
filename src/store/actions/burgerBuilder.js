import * as actionTypes from './actionTypes';


export const addIngredient = (name) => {
  return {
    type:actionTypes.ADD_INGREDIENT,
    ingredientName:name
  };
};

export const removeIngredient = (name) => {
  return {
    type:actionTypes.REMOVE_INGREDIENT,
    ingredientName:name
  };
};

export const setIngredients = (ingredients) => {
  console.log('4');
  console.log('setIngredients');
  return {
    type:actionTypes.SET_INGREDIENTS,
    ingredientName:ingredients
  };
};

export const fetchIngredientsFailed = () => {
  console.log('failed');
  return {
    type:actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return {
    type:actionTypes.INIT_INGREDIENTS
  };
};
