const request = require('supertest');
const app = require('./index');

let server;

beforeAll((done) => {
  server = app.listen(5120, done); // Start the server before tests
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
