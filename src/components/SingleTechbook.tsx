import { TechBook } from "../shared/types";

interface IProps {
	techBook: TechBook;
}

export const SingleTechBook = ({ techBook }: IProps) => {
	return (
		<>
			<div key={techBook.id}>{techBook.title}</div>
		</>
	);
};
