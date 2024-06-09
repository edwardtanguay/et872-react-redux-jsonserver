export type ISiteEnvironment = "normal" | "debug";

export interface IAppData {
	siteEnvironment: ISiteEnvironment
}

export const initialAppData:IAppData = {
	siteEnvironment: 'normal'
}