import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/home', (req, res) => {
  res.status(200).send('home2');
});

const PORT = 9090;

app.listen(PORT, () => {
  console.log('Server is listening at http://localhost:%s', PORT);
});
