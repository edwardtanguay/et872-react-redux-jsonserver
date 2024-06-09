import { useContext } from "react";
import { AppContext } from "../AppContext";
import { SingleTechBook } from "../components/SingleTechbook";

export const PageTechBooks = () => {
	const { techBooks } = useContext(AppContext);
	return (
		<>
			<p>There are {techBooks.length} tech books.</p>

			{techBooks.map(techBook => {
				return (
					<SingleTechBook techBook={techBook} />
				)
			})}
		</>
	);
};
