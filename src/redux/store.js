import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import logger from 'redux-logger';
import cart from './cart/cart_reducer';

const cartPersistConfig = {
  key: 'cart',
  storage: sessionStorage,
  whitelist: ['products'],
};

const store = configureStore({
  reducer: {
    cart: persistReducer(cartPersistConfig, cart),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),

  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
