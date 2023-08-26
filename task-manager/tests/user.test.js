const request = require('supertest');
const app = require('../src/app');

test('Should singup a new user', async () => {
    await request(app).post('/users').send({
        "name": "mike",
        "email": "mike@gmail.com",
        "password": "mike_abc@123"
    }).expect(201);
});