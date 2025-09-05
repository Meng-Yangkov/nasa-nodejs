const { describe, test } = require('node:test');
//for checking two values are the same or not
const { deepStrictEqual, strictEqual } = require('node:assert');

const request = require('supertest'); //-> for testing http
const app = require('../app')

describe('Test GET /launches', () => {
  test('It should work with 200 response code', async () => {
    const response = await request(app) 
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
    strictEqual(response.statusCode, 200);
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
  const launchWithInvalidDate = {
    mission: 'Being Software Engineer',
    rocket : 'F-16 Fighting falcon',
    target: 'New York City',
    launchDate: ('thymaya')
  }; 
  test('It should work with 201 response code', async () => {
    const response = await request(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    deepStrictEqual(responseDate, requestDate);

    const { mission, rocket, target} = response.body;
    deepStrictEqual({
      mission,
      rocket,
      target,
    }, LaunchDataWithoutDate); 
  });

  test('It should catch missing the required properties', async () => {
    const response = await request(app)
      .post('/launches')
      .send(LaunchDataWithoutDate)
      .expect('Content-Type', /json/)
      .expect(400);
    deepStrictEqual(response.body,{
      error: 'Mission required launch property!'
    });
  });
  test('It should catch invalid date',async () => {
    const response = await request(app)
      .post('/launches')
      .send(launchWithInvalidDate)
      .expect('Content-Type', /json/)
      .expect(400);
    deepStrictEqual(response.body,{
      error: 'Invalid launch date'
    });
  });
});