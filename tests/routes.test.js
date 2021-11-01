const request = require('supertest');
const app = require('../app');
let id, token;
const userData = {
  username: 'test',
  email: 'test@gmail.com',
  password: '123123',
  isAdmin: true
};

afterAll(async () => {
  await request(app)
    .delete('/api/user/delete')
    .send({ userId: id })
    .set('Authorization', `Bearer ${token}`);
});

describe('Auth Endpoints', () => {
  it('should register', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(userData);
    expect(res.statusCode).toEqual(201);
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
      .send({ email: userData.email, password: userData.password });
    token = res.body.token;
    id = res.body.userId;
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('userId');
  });

  it('should fail login because user does not exist', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: `${userData.email}test`, password: userData.password });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });

  it('should fail login because of wrong password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: userData.email, password: '000000' });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });

  it('should check token', async () => {
    const res = await request(app)
      .get('/api/auth/token')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('decoded');
  });

  it('should fail checking token', async () => {
    const res = await request(app)
      .get('/api/auth/token')
      .set('Authorization', `Bearer ${token}test`);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message');
  });

  it('should generate new token', async () => {
    const res = await request(app)
      .post('/api/auth/generate')
      .send({ email: userData.email })
      .set('Authorization', `Bearer ${token}`);
    token = res.body.token;
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should fail generation new token', async () => {
    const res = await request(app)
      .post('/api/auth/generate')
      .send({ email: userData.email })
      .set('Authorization', `Bearer ${token}test`);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message');
  });
});

describe('User Endpoints', () => {
  it('should fetch all users', async () => {
    const res = await request(app)
      .get('/api/user/')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(201);
  });

  it('should fail fetching users', async () => {
    const res = await request(app)
      .get('/api/user/')
      .set('Authorization', `Bearer ${token}test`);
    expect(res.statusCode).toEqual(401);
  });

  it('should fetch a user', async () => {
    const res = await request(app)
      .get(`/api/user/${id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email');
  });

  it('should fail fetching a user', async () => {
    const res = await request(app)
      .get(`/api/user/${id}testId`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(500);
  });

  it('should update a user', async () => {
    const res = await request(app)
      .post('/api/user/update')
      .send({user: {
        ...userData,
          username: 'tested',
          email: 'tested@gmail.com'
        }, id: id
      })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(201);
  });

  it('should fail updating a user', async () => {
    const res = await request(app)
      .post('/api/user/update')
      .send({user: {
          ...userData,
          username: 'tested',
          email: 'tested@gmail.com'
        }, id: id
      })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(400);
  });

  it('should delete a user', async () => {
    const res = await request(app)
      .delete('/api/user/delete')
      .send({ userId: id })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(201);
  });

  it('should fail deleting a user', async () => {
    const res = await request(app)
      .delete('/api/user/delete')
      .send({ userId: id })
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(500);
  });
});
