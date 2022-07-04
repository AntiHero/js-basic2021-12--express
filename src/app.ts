import express from 'express';
import { resolve } from 'node:path';
import logger from './middlewares/logger';
import session from 'cookie-session';
import bookRouter from './controller/book';

const oneDay = 1000 * 60 * 60 * 24;

const app = express();

app.use(
  session({
    secret: 'sfajnh4faAN99',
    maxAge: oneDay,
  })
);

app.use(express.json());

app.use('/api/books', bookRouter);
app.use(express.static('public'));

app.get('/counter', logger, (req, res) => {
  if (req.session) {
    req.session.count === undefined
      ? (req.session.count = 1)
      : (req.session.count += 1);
    res.status(200).send({ count: req.session.count });
  }

  res.status(400).send('');
});

app.post('/counter', logger, (req, res) => {
  console.log(req.body, 'body');

  if (req.session) {
    req.session.count === undefined
      ? (req.session.count = 1)
      : (req.session.count += req.body.incremeneter);
    res.status(200).send({ count: req.session.count });
    return;
  }

  res.status(400).send('');
});

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../public/404.html'));
});

export default app;
