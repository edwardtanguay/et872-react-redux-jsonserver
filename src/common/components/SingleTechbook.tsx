import { useDispatch, useSelector } from "react-redux";
import { TechBook } from "../../shared/types";
import { RootState } from "../../app/store";

interface IProps {
	techBook: TechBook;
	view?: "full" | "cart";
}

export const SingleTechBook = ({ techBook, view = "full" }: IProps) => {
	const dispatch = useDispatch();
	const cartSelector = (state: RootState) => state.cart;
	const { cartItems } = useSelector(cartSelector);

	const numberInCart = (techBook: TechBook): number => {
		return cartItems.filter((m) => m.techBook.id === techBook.id).length;
	};

	return (
		<>
			{view === "full" && (
				<div className="bg-slate-500 w-[30rem] mb-2 p-5 rounded flex gap-3">
					<img
						src={`images/techBooks/${techBook.idCode}.jpg`}
						className="rounded w-[9rem] h-fit shadow-lg shadow-gray-600 cursor-pointer"
						onClick={() =>
							dispatch({
								type: "cart/addCartItem",
								payload: { techBook },
							})
						}
					/>
					<section>
						<div className="text-[1.2rem] font-semibold">
							{techBook.title}
						</div>
						<div className="italic">{techBook.description}</div>
						<p
							className={`text-sm ${
								numberInCart(techBook) > 0
									? "text-yellow-400 font-semibold"
									: "text-gray-400 italic"
							}`}
						>
							{numberInCart(techBook)} in cart
						</p>
						<button className="danger" onClick={() => dispatch({ type: "cart/deleteTechBook", payload: techBook })}>admin delete</button>
					</section>
				</div>
			)}
			{view === "cart" && (
				<div className="bg-slate-500 mb-2 p-3 rounded flex gap-3 items-center w-[30rem] h-[4rem]">
					<img
						src={`images/techBooks/${techBook.idCode}.jpg`}
						className="rounded w-[2rem] h-fit shadow-lg shadow-gray-600 cursor-pointer"
						onClick={() =>
							dispatch({
								type: "cart/addCartItem",
								payload: { techBook },
							})
						}
					/>
					<div className="text-[1.2rem] font-semibold flex">
						{techBook.title}
					</div>
				</div>
			)}
		</>
	);
};
