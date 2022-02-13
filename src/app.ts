import 'dotenv/config';

// @ts-ignore
import { config } from 'node-config-ts';
import express from 'express';
import hello from './routes/hello';
import path from 'path';

const app = express();
const port = config.port;

app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, '/views'));
app.use(express.static('public'));

app.use('/', hello);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});