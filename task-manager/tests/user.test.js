const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
    "name": "sunny3",
    "email": "sanny3@gmail.com",
    "password": "sunny@25"
};

beforeEach(async () => {
    // console.log('beforeEach')
    await User.deleteMany();
    await new User(userOne).save();
});

// afterEach(() => {
//     console.log('afterEach')
// });

test('Should singup a new user', async () => {
    await request(app).post('/users').send({
        "name": "mike",
        "email": "mike@gmail.com",
        "password": "mike_abc@123"
    }).expect(201);
});

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        "email": userOne.email,
        "password": userOne.password
    }).expect(200);
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        "email": userOne.email,
        "password": "thisispass"
    }).expect(400);
})