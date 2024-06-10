import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SingleTechBook } from "../components/SingleTechbook";

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
					<p className={cartItems.length > 0 ? 'text-yellow-200 font-semibold' : 'text-gray-400 italic'}>The are {cartItems.length} items the cart.</p>
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};
