import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TechBook } from "../../shared/types";

export type CartItem = {
	techBook: TechBook;
}

export type State = {
	rating: number,
	techBooks: TechBook[],
	cartItems: CartItem[]
}

const techBooks:TechBook[] = [
	{
		"id": 1,
		"idCode": "buildingMicroservices",
		"title": "Building Microservices",
		"description": "Seems to be a high-level abstract book how to not only implement microservices but how to get your head around the paradigm shifts involved, e.g. from request-response to event-driven patterns.",
		"notes": "",
		"yearMonth": "2021-09",
		"rank": "4.1",
		"language": "",
		"extras": "",
		"systemWhenCreated": "2022-05-17 00:54:35",
		"systemWhoCreated": "systemUnknown"
	},
	{
		"id": 2,
		"idCode": "gatsbyEcommerce",
		"title": "Gatsby E-Commerce",
		"description": "An interesting aspect of Gatsby: using it for e-commerce site which focuses on practical tips around this focus.",
		"notes": "",
		"yearMonth": "2021-03",
		"rank": "4.3",
		"language": "",
		"extras": "",
		"systemWhenCreated": "2022-05-17 00:54:35",
		"systemWhoCreated": "systemUnknown"
	},
	{
		"id": 3,
		"idCode": "rustWeb",
		"title": "Rust Web Programming",
		"description": "Looking forward to creating sites in Rust on my Debian box at Hetzner. This looks like a practical way to learn Rust in order to actually build something useful.",
		"notes": "",
		"yearMonth": "2021-02",
		"rank": "4.8",
		"language": "",
		"extras": "",
		"systemWhenCreated": "2022-05-17 00:54:35",
		"systemWhoCreated": "systemUnknown"
	}
];

const initialState:State = {
	rating: 5,
	cartItems: [],
	techBooks
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
			console.log(111, 'adding techBook');
			state.cartItems.push(action.payload);
		}
	}
});

export const { subtract, add, addCartItem} = cartSlice.actions;
export default cartSlice.reducer;