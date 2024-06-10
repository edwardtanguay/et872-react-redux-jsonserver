import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTechBooks } from "../features/cart/cartSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

store.dispatch(getTechBooks());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
