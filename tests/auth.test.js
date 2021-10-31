const request = require('supertest');
const app = require('../app');

let id, token;
const userData = {
  username: 'test',
  email: 'test@gmail.com',
  password: '123123',
  isAdmin: false
};

describe('Auth Endpoints', () => {
  afterAll(async () => {
    await request(app)
      .delete('/api/user/delete')
      .send({ userId: id })
      .set('Authorization', `Bearer ${token}`)
  });

  it('should register', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(userData)
    expect(res.statusCode).toEqual(201)
  });

  it('should fail registration', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(userData)
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });

  it('should login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: userData.email, password: userData.password })
    token = res.body.token;
    id = res.body.userId;
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('userId');
  });

  it('should fail login because of non-existing credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: `${userData.email}test`, password: userData.password })
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });

  it('should fail login because of wrong password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: userData.email, password: '000000' })
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });

  it('should check token', async () => {
    const res = await request(app)
      .get('/api/auth/token')
      .set('Authorization', `Bearer ${token}`)
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('decoded');
  });

  it('should fail checking token', async () => {
    const res = await request(app)
      .get('/api/auth/token')
      .set('Authorization', `Bearer ${token}test`)
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message');
  });

  it('should generate new token', async () => {
    const res = await request(app)
      .post('/api/auth/generate')
      .send({ email: userData.email })
      .set('Authorization', `Bearer ${token}`)
    token = res.body.token;
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should fail generation new token', async () => {
    const res = await request(app)
      .post('/api/auth/generate')
      .send({ email: userData.email })
      .set('Authorization', `Bearer ${token}test`)
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message');
  });
})
