export interface IFlashcard {
	id: number;
	category: string;
	front: string
	back: string;
}

export type ISiteEnvironment = "normal" | "debug";

export interface IAppData {
	flashcards: IFlashcard[],
	siteEnvironment: ISiteEnvironment
}

export const initialAppData:IAppData = {
	flashcards: [],
	siteEnvironment: 'normal'
}

export interface IDb {
	flashcards: IFlashcard[]
}