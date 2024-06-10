import { RootState } from "../../app/store";
import { useSelector } from "react-redux"

export const PageAbout = () => {
	const selectCart = (state: RootState) => state.cart;
	const { rating } = useSelector(selectCart);

	return (
		<p>This site is currently rated {rating} of 10 points.</p>
	)
}
