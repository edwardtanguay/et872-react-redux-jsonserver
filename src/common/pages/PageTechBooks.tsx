import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SingleTechBook } from "../components/SingleTechbook";

export const PageTechBooks = () => {
	const selectCart = (state: RootState) => state.cart;
	const { techBooks } = useSelector(selectCart);

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
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};
