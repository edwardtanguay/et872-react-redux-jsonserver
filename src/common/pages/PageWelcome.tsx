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
	const { rating } = useSelector(selectCart);

	return (
		<>
			<p className="text-xl mb-3">
				Welcome to the Redux Book Shop, current mode is{" "}
				{appData.siteEnvironment}.
			</p>
			<section className="border w-fit border-slate-500 p-3 rounded flex flex-col justify-center align-middle">
				<p className="text-xl mb-2">
					Please rank the site from 1 to 10:
				</p>
				<div className="flex gap-1 w-full justify-center">
					<section className="flex gap-1  w-[7.5rem]">
						<button
							className="symbols w-8 text-2xl"
							onClick={() => dispatch(subtract())}
						>
							-
						</button>
						<button
							className="symbols w-8 text-2xl"
							onClick={() => dispatch(add())}
						>
							+
						</button>
						<p className="ml-2 text-2xl">{rating}</p>
					</section>
				</div>
			</section>
		</>
	);
};
