const request = require('supertest'); //-> for testing http
const app = require('../app')

describe('Test GET /launches', () => {
  test('It should work with 200 response code', async () =>{
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.statusCode).toBe(200);
  });
});

describe('Test POST /launches', () => {
  test('It should work with 200 response code',() =>{});

  test('It should catch missing the required properties', () => {});
  test('It should catch invalid date', () => {})
})