import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageTechBooks = () => {
	const { techBooks } = useContext(AppContext);
	return (
		<>
			<p>There are {techBooks.length} tech books.</p>

			{techBooks.map(techBook => {
				return (
					<div key={techBook.id}>{techBook.title}</div>
				)
			})}
		</>
	);
};
