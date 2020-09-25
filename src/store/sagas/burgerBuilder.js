import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';
import * as actions from '../actions/index'

export function* initIngredientsSaga(action){
  try{
    const response = yield axios.get('https://burger-a0648.firebaseio.com/ingredients.json');
    yield put(actions.setIngredients(response.data));
  }
  catch(error){
    yield put(actions.fetchIngredientsFailed());
  }
       /*.then( response => {
         console.log('3');
         console.log('firebase');
         console.log(response);
         dispatch(setIngredients(response.data));
         console.log(this.props);
       }).catch( err => {
         dispatch(fetchIngredientsFailed());
       });*/
}
