const { describe, it, expect } = require('@jest/globals');
const request = require('supertest');
const app = require('./index'); // Assuming your Express app is in app.js

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
