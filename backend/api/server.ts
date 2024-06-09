import express from 'express';
import cors from 'cors';
import * as tools from '../../src/shared/tools';
import { IDb } from '../../src/shared/interfaces';

export const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send(`
<h1>Vite API - One Directory</h1>	
<ul>
	<li><a href="/appdata">/appdata</a></li>
	<li><a href="">/appdata</a></li>
</ul>
	`)
});

app.get('/appdata', (req, res) => {
	const db:IDb= tools.getJsonFromFile('./backend/data/db.json');
	res.json({
		flashcards: db.flashcards,
		siteEnvironment: 'normal'
	})
});
