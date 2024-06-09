import * as config from "./config";
import * as tools from './tools';

export const getJsonServerPort = () => {
	return 4205;
};

export const getApiPort = () => {
	return 4206;
};

export const getFrontendPort = (): number => {
	const packageJsonObj = tools.getJsonFromFile("./package.json");
	const devCommand = packageJsonObj.scripts.frontend;
	const port = tools.extractPortNumber(devCommand);
	return port;
};

export const getAppIdCode = (): string => {
	const packageJsonObj = tools.getJsonFromFile('./package.json');
	const idCode = packageJsonObj.name;
	return idCode;
}

export const getLocalhostBase = (): string => {
	return 'http://localhost';
}

export const getJsonServerUrl = () => {
	return `${config.getLocalhostBase()}:${config.getJsonServerPort()}`;
}

export const getApiUrl = () => {
	return `${config.getLocalhostBase()}:${config.getApiPort()}`;
}

export const getFrontendUrl = () => {
	return `${config.getLocalhostBase()}:${config.getFrontendPort()}`;
}