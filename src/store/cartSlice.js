import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		currentCurrency: "$",
		products: [],
	},
	reducers: {
		setCurrency(state, action) {
			state.currentCurrency = action.payload;
		},
		addToCart(state, action) {
			state.products = action.payload;
		},
		removeFromCart(state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		logOutState(state, _) {
			state.user = { name: null, email: null };
			state.token = null;
		},
	},
});

export const { setCurrency, addToCart, removeFromCart, logOutState } = cartSlice.actions;
