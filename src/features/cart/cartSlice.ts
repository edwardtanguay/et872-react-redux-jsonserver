import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	rating: 5,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		subtract: (state) => {
			state.rating--;
		},
		add: (state) => {
			state.rating++;
		},
	},
});

export const { subtract, add } = cartSlice.actions;
export default cartSlice.reducer;
