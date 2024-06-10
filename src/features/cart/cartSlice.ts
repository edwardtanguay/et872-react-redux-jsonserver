/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TechBook } from "../../shared/types";
import axios from "axios";

export type CartItem = {
	techBook: TechBook;
}

export type State = {
	rating: number,
	techBooks: TechBook[],
	cartItems: CartItem[],
	status: "loading" | "completed" | "error"
}

const techBooksUrl = 'http://localhost:4205/techbooks';

export const getTechBooks = createAsyncThunk("cart/getTechBooks", async () => {
	const response = await axios.get(techBooksUrl);
	return response.data;
});

export const deleteTechBook = createAsyncThunk('cart/deleteTechBook', async (techBook: TechBook, {rejectWithValue}) => {
	try {
		console.log(222, techBook);
		await axios.delete(`${techBooksUrl}/${techBook.id}`);
		return techBook.id;
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
})



const initialState:State = {
	rating: 5,
	cartItems: [],
	techBooks: [],
	status: 'loading'
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
		},
		addCartItem: (state, action: PayloadAction<CartItem>) => {
			state.cartItems.push(action.payload);
		},
		deleteTechBook: (state, action: PayloadAction<TechBook>) => {
			console.log(333, 'deleting book');
			// deleteTechBook(action.payload);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getTechBooks.pending, (state) => {
			state.status = 'loading';
		}).addCase(getTechBooks.fulfilled, (state, action) => {
			state.status = 'completed';
			state.techBooks = action.payload;
		})
	}
});

export const { subtract, add, addCartItem} = cartSlice.actions;
export default cartSlice.reducer;