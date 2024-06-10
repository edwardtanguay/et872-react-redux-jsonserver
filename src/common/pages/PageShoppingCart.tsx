import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SingleTechBook } from "../components/SingleTechbook";

export const PageShoppingCart = () => {
	const cartSelector = (state: RootState) => state.cart;
	const { cartItems } = useSelector(cartSelector);

	return (
		<>
			<p className="mb-3">There are {cartItems.length} items in your cart.</p>
			<section className="flex flex-col gap-1">
				{cartItems.map((cartItem) => {
					return (
						<SingleTechBook techBook={cartItem.techBook} view="cart" key={cartItem.techBook.id} />
					);
				})}
			</section>
		</>
	);
};
