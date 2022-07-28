import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

const cartPersistConfig = {
	key: "cart",
	storage,
};

const cartReducer = persistReducer(cartPersistConfig, cartSlice.reducer);

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	],
});

export const persistor = persistStore(store);
