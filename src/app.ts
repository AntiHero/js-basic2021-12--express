import express from 'express';
import { resolve } from 'node:path';
import logger from './middlewares/logger';

let counter = 0;

const app = express();

app.use(express.static('public'));

app.get('/counter', logger, (req, res) => {
  res.status(200).send(`${++counter}`);
});

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../public/404.html'));
});

export default app;
