import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addProductRequest,
  addProductSuccess,
  addProductError,
} from './cart_action';

const initial = {
  products: [],
};

const products = createReducer(initial.products, {
  [addProductSuccess]: (state, { payload }) => [...state, payload],
});

const error = createReducer(false, {
  [addProductRequest]: () => false,
  [addProductSuccess]: () => false,
  [addProductError]: () => true,
});

const isLoading = createReducer(false, {
  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,
});

export default combineReducers({
  products,
  error,
  isLoading,
});
