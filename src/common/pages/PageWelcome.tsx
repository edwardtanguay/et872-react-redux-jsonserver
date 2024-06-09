/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { add, subtract } from "../../features/cart/cartSlice";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);
	const dispatch = useDispatch();
	const selectCart = (state: RootState) => state.cart;
	const { count } = useSelector(selectCart);

	return (
		<>
			<p className="text-xl mb-3">
				Welcome to the Redux Book Shop, current mode is {appData.siteEnvironment}.
			</p>
			<div className="flex gap-3">
				<button onClick={() => dispatch(subtract())}>Subtract</button>
				<button onClick={() => dispatch(add())}>Add</button>
				<p className="text-xl">count = {count}</p>
			</div>
		</>
	);
};
