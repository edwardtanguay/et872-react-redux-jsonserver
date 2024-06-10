import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SingleTechBook } from "../components/SingleTechbook";
import { NavLink } from "react-router-dom";

export const PageTechBooks = () => {
	const selectCart = (state: RootState) => state.cart;
	const { techBooks, cartItems } = useSelector(selectCart);

	return (
		<>
			{techBooks.length > 0 ? (
				<>
					<p className="mb-3 text-xl">
						There are {techBooks.length} tech books.
					</p>

					<section className="flex flex-wrap gap-3">
						{techBooks.map((techBook) => {
							return (
								<SingleTechBook
									techBook={techBook}
									key={techBook.id}
								/>
							);
						})}
					</section>
					<p
						className={
							cartItems.length > 0
								? "text-yellow-300 font-semibold bg-gray-700 w-fit px-2 py-1 rounded"
								: "text-gray-400 italic"
						}
					>
						There are {cartItems.length} items in your {' '}
						<NavLink to="/shoppingcart" className="underline">
							cart
						</NavLink> at the moment.
					</p>
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};
