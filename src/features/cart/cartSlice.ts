import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		subtract: (state) => {
			state.count--;
		},
		add: (state) => {
			state.count++;
		}
	}
});

export const { subtract, add } = cartSlice.actions;
export default cartSlice.reducer;