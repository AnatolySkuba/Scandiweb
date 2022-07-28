import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		currentCurrency: "$",
	},
	reducers: {
		setCurrency(state, action) {
			state.currentCurrency = action.payload;
		},
		setIsSignedIn(state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		setIsLoggedIn(state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		logOutState(state, _) {
			state.user = { name: null, email: null };
			state.token = null;
		},
	},
});

export const { setCurrency, setIsSignedIn, setIsLoggedIn, logOutState } = cartSlice.actions;
