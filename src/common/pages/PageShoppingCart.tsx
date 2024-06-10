import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SingleTechBook } from "../components/SingleTechbook";

export const PageShoppingCart = () => {
	const cartSelector = (state: RootState) => state.cart;
	const { cartItems } = useSelector(cartSelector);

	return (
		<>
			<p>There are {cartItems.length} in your cart.</p>
			<section className="flex flex-wrap gap-3">
				{cartItems.map((cartItem) => {
					return (
						<SingleTechBook techBook={cartItem.techBook} key={cartItem.techBook.id} />
					);
				})}
			</section>
		</>
	);
};
