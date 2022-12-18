import express, { Application} from 'express';

export async function Server() {
	try {
		const webServer: Application = express();

		const PORT = 4000;

		webServer.listen(PORT, () => console.log('Http Server started listening on port', PORT));
	} catch (error) {
		console.log(error);
	}
}
