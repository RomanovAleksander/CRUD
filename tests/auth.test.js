const app = require('../app');
const config = require('config');
const mongoose = require('mongoose');
const request = require('supertest');

beforeEach((done) => {
  mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => done());
});

afterEach((done) => {
    mongoose.connection.close(() => done())
});

const userData = {
  username: 'test',
  email: 'test@gmail.com',
  password: '123123',
  isAdmin: false
};

describe('Register', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(userData)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toBeTruthy()

  })
})
