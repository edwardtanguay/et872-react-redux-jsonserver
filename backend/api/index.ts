import * as config from "../../src/shared/config";
import { app } from "./server";

app.listen(config.getApiPort(), () => {
	process.stdout.write("\u001b[2J\u001b[0;0H");
	console.log("");
	console.log(`PROJECT: ${config.getAppIdCode()}`);
	console.log("------------------------------------");
	console.log(`JSON-SERVER: ${config.getJsonServerUrl()}`);
	console.log(`API: ${config.getApiUrl()}`);
	console.log(`FRONTEND: ${config.getFrontendUrl()}`);
});
