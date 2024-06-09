import { TechBook } from "../shared/types";

interface IProps {
	techBook: TechBook;
}

export const SingleTechBook = ({ techBook }: IProps) => {
	return (
		<div className="bg-slate-500 w-[40rem] mb-2 p-2 rounded">
			<img src="images/techBooks/viAndVim.jpg"/>
			<div key={techBook.id} className="text-[1.2rem] font-semibold">{techBook.title}</div>
			<div className="italic">{techBook.description}</div>
		</div>
	);
};
