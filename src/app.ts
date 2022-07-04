import express from 'express';

const app = express();

app.use(express.static('public'));

// app.get('/home', (req, res) => {
//   res.status(200).send('home2');
// });
//
export default app;
