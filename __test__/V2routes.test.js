'use strict';

process.env.SECRET = "TEST_SECRET";
const {db,users} = require('../src/models/index');
const supertest = require('supertest');
const {app} = require('../src/server');
const mockRequest = supertest(app);
const {handleSignup,handleSignin} = require('../src/router/routes-functions');


let AdminUser = {
    name: "admin",
    password: "adminpassword",
    role: "admin"
};
let editorUser = {
    name: "editor",
    password: "editorpassword",
    role: "editor"
};
let writerUser = {
    name: "writer",
    password: "writerpassword",
    role: "writer"
};
let readerUser = {
    name: "reader",
    password: "readerpassword",
    role: "user"
};
let id;


beforeAll(async () => {
    await db.sync();
    // await users.create(AdminUser);
    // await users.create(editorUser);
    // await users.create(writerUser);
    // await users.create(readerUser);
});
afterAll(async () => {
    await db.drop();
});

 

describe('Testing for V2 (Authenticated API) Routes', () => {

    it('POST /api/v2/:model with a bearer token that has create permissions adds an item to the DB and returns an object with the added item', async () => {

        let auth = await mockRequest.post('/signup').send(writerUser);
        console.log({auth});
        let userToken = auth.body.token;
        console.log({userToken});
        const response = await mockRequest.post('/api/v2/food').send({
                username: "writer",
                password : "writerpassword",
                role:"writer"
        }).set("Authorization", `Bearer ${userToken}`);
        id = response.body.id;
        console.log({response});
            if (element === 'writer' || element === 'editor'||element === 'admin') {
                expect(response.status).not.toBe(500);
            } else {
                expect(response.status).not.toBe(201);
        } 
        
    });

//     it('GET/api/v1/:model returns a list of :model items', async () => {
//         const res = await mockRequest.get('/api/v1/food');
//         let resObj = JSON.parse(res.text);
//         expect(res.status).toBe(200);
//         // console.log("RESSS",res.text);
//         expect(resObj).toStrictEqual([{
//             id: expect.any(Number),
//             name: expect.any(String),
//             calories: expect.any(Number),
//             type: expect.any(String),
//             updatedAt: expect.any(String),
//             createdAt: expect.any(String)
//         }])
//     });

//     it('GET /api/v1/:model/ID returns a single item by ID', async () => {
//         const res = await mockRequest.get('/api/v1/food/1');
//         let resObj = JSON.parse(res.text);
//         expect(res.status).toBe(200);
//         // console.log("RESSS",res.text);
//         expect(resObj).toStrictEqual({
//             id: expect.any(Number),
//             name: expect.any(String),
//             calories: expect.any(Number),
//             type: expect.any(String),
//             updatedAt: expect.any(String),
//             createdAt: expect.any(String)
//         })
//     });

//     it('PUT /api/v1/:model/ID returns a single, updated item by ID', async () => {
//         const res = await mockRequest.put('/api/v1/food/1').send({
//             name: "orange",
//             calories: "20",
//             type: "fruit"
//         })
//         let resObj = JSON.parse(res.text);
//         expect(res.status).toBe(200);
//         // console.log("RESSS",res.text);
//         expect(resObj).toStrictEqual({
//             id: 1,
//             name: "orange",
//             calories: "20",
//             type: "fruit",
//             updatedAt: expect.any(String),
//             createdAt: expect.any(String)
//         })
//     });

//     it('DELETE /api/v1/:model/ID returns an empty object.', async () => {
//         const res = await mockRequest.delete('/api/v1/food/1')
//         expect(res.status).toBe(204);
//         // console.log("RESSS",res);
//         // expect(res.text).toMatchObject({});
//     });

//     it('GET /api/v1/:model/ID Subsequent GET for the same ID should result in nothing found', async () => {
//     const res = await mockRequest.get('/api/v1/food/1');
//     let resObj = JSON.parse(res.text);
//     expect(res.status).toBe(200);
//     // console.log("RESSS",res.text);
//     expect(resObj).toBeNull();
// });


});