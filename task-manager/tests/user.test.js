const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/user');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: "sunny3",
    email: "sanny3@gmail.com",
    password: "sunny@25",
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
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
    const response = await request(app).post('/users').send({
        name: "mike",
        email: "mike@gmail.com",
        password: "mike_abc@123"
    }).expect(201);

    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: "mike",
            email: "mike@gmail.com"
        },
        token: user.tokens[0].token
    });
    expect(user.password).not.toBe('mike_abc@123');
});

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        "email": userOne.email,
        "password": userOne.password
    }).expect(200);

    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        "email": userOne.email,
        "password": "thisispass"
    }).expect(400);
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401);
})

test('Should delete account for user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user).toBeNull();
})

test('Should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401);
})