const request = require('supertest'); //-> for testing http
const app = require('../app')

describe('Test GET /launches', () => {
  test('It should work with 200 response code', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.statusCode).toBe(200);
  });
});

describe('Test POST /launches', () => {

  const completeLaunchData = {
    mission: 'Being Software Engineer',
    rocket : 'F-16 Fighting falcon',
    target: 'New York City',
    launchDate: ('November 04, 2030')
  };
  const LaunchDataWithoutDate = {
    mission: 'Being Software Engineer',
    rocket : 'F-16 Fighting falcon',
    target: 'New York City',
  };  
  test('It should work with 201 response code', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);
    expect(response.body).toMatchObject(LaunchDataWithoutDate);
  });

  test('It should catch missing the required properties', () => {});
  test('It should catch invalid date', () => {})
})