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
	},
});

export const { setCurrency, addToCart } = cartSlice.actions;
