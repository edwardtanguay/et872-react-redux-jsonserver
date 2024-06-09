import { createContext, useEffect, useState } from "react";
import { IAppData, initialAppData } from "./shared/types";
import axios from "axios";

interface IAppContext {
	appData: IAppData;
	loadAppData: () => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = "http://localhost:4206";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appData, setAppData] = useState<IAppData>(initialAppData);

	const loadAppData = async () => {
		const response = await axios.get(`${backendUrl}/appdata`);
		const _appData = response.data;
		setAppData(_appData);
	};

	useEffect(() => {
		loadAppData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appData,
				loadAppData
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
