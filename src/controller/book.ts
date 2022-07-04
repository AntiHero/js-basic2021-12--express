import express from 'express';
import Book from '../model/book';

const bookRouter = express.Router();

bookRouter.get('/', async (req, res) => {
  try {
    const book = await Book.find({}).exec();

    res.status(200).json(book);
  } catch (e) {
    res.status(400).json('Bad request');
  }
});

bookRouter.post('/', async (req, res) => {
  const { author, title, year } = req.body;

  try {
    const book = await Book.create({ author, title, year });

    res.status(201).json(book);
  } catch (e) {
    res.status(400).json('Bad request');
  }
});

bookRouter.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);

    res.status(201).json(book);
  } catch (e) {
    res.status(400).json('Bad request');
  }
});

export default bookRouter;
