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
			<p>
				Welcome to the book shop, current mode is {appData.siteEnvironment}.
			</p>
			<div>
				<button onClick={() => dispatch(subtract())}>Subtract</button>
				<button onClick={() => dispatch(add())}>Add</button>
				<div>count = {count}</div>
			</div>
		</>
	);
};
