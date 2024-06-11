import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTechBooks } from "../features/cart/cartSlice";
import userReducer, { getUsers } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userReducer
	},
});

store.dispatch(getTechBooks());
store.dispatch(getUsers());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
