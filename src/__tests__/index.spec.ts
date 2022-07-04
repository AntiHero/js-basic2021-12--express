import request from 'supertest';
import app from '../app';

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
