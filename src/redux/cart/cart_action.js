import { createAction } from '@reduxjs/toolkit';

export const addProductRequest = createAction('cart/addProductRequest');
export const addProductSuccess = createAction('cart/addProductSuccess');
export const addProductError = createAction('cart/addProductError');
