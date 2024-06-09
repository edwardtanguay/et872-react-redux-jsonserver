import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	rating: 5
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		subtract: (state) => {
			state.rating--;
			state.rating = state.rating < 0 ? 0 : state.rating;
		},
		add: (state) => {
			state.rating++;
			state.rating = state.rating > 10 ? 10 : state.rating;
		}
	}
});

export const { subtract, add } = cartSlice.actions;
export default cartSlice.reducer;