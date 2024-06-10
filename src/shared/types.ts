export type ISiteEnvironment = "normal" | "debug";

export interface IAppData {
	siteEnvironment: ISiteEnvironment;
}

export const initialAppData: IAppData = {
	siteEnvironment: "normal",
};

export type TechBook = {
	id: number;
	idCode: string;
	title: string;
	description: string;
	notes: string;
	yearMonth: string;
	rank: string;
	language: string;
	extras: string;
	systemWhenCreated: string;
	systemWhoCreated: string;
};

export type User = {
	id: number;
	firstName: string;
	lastName: string;
}