import { combineReducers } from 'redux';
import { productsReducer } from './ProductsReducer';

export const rootReducer = combineReducers({
  products: productsReducer
})