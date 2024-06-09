/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>
				Welcome to this page, current mode is {appData.siteEnvironment}.
			</p>
		</>
	);
};
