import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app';
import Book from '../model/book';
import connectToMongoDB from '../utils/connectToMongodDb';

describe('testing API', () => {
  test('GET /', (done) => {
    expect.assertions(1);

    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);

        expect(res.text).toMatch(/Hello, Otus!!!/);
        done();
      });
  });
});

describe('testing DB', () => {
  const URL = process.env.MONGODB_TEST_URL as string;

  beforeAll(async () => {
    await connectToMongoDB(URL);
    await Book.deleteMany({}).exec();
  });

  test('should create book', (done) => {
    expect.assertions(1);

    const book = {
      author: 'Кот Матроскин',
      title: 'Мурзилка',
      year: 1970,
    };

    request(app)
      .post('/api/books')
      .send(book)
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        if (err) done(err);

        expect(JSON.parse(res.text).title).toMatch(/Мурзилка/);
        done();
      });
  });

  test('should return books', (done) => {
    expect.assertions(1);

    request(app)
      .get('/api/books')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        console.log(res.text.length);
        expect(JSON.parse(res.text).length).toBe(1);
        done();
      });
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});
