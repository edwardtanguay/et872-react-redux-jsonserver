import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const PageShoppingCart = () => {
	// const dispatch = useDispatch();
	const cartSelector = (state: RootState) => state.cart;
	const { cartItems } = useSelector(cartSelector);

	return (
		<>
			<p>There are {cartItems.length} in your cart.</p>
		</>
	)
};
