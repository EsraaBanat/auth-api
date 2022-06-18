'use strict';

process.env.SECRET = "TEST_SECRET";

const {db, users} = require('../src/models/index');
const {handleSignup} = require('../src/router/routes-functions');
const {handleSignin} = require('../src/router/routes-functions');

beforeAll(async () => {
    await db.sync();
    await users.create({ username: 'test', password: 'test' });
});
afterAll(async () => {
    await db.drop();
});

describe('Testing the AUTH Routes', () => {

    const res = {
        send: jest.fn(() => res),
        status: jest.fn(() => res),
        json: jest.fn(() => res),
    };
    const next = jest.fn();

    test('POST /signup creates a new user and sends an object with the user and the token to the client', async () => {

        let req = {
            body: {
                username: 'test',
                password: 'test'
            }
        };

        await handleSignup(req, res, next);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                user: expect.any(Object),
                token: expect.any(String)
            })
        );
    });

test('POST /signin with basic authentication headers logs in a user and sends an object with the user and the token to the client', async () => {
    let req = {
      user: await users.findOne({ where: { username: 'test' } }),
    }

    await handleSignin(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        user: expect.objectContaining({
          username: expect.any(String),
          password: expect.any(String),
          token: expect.any(String),
        }),
        token: expect.any(String),
      })
    );
  });

});