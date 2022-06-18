'use strict';

process.env.SECRET = "TEST_SECRET";
const {db} = require('../src/models/index');
const supertest = require('supertest');
const {app} = require('../src/server');
const mockRequest = supertest(app);

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

beforeAll(async () => {
    await db.sync();
});
afterAll(async () => {
    await db.drop();
});

describe('Testing for V2 (Authenticated API) Routes', () => {

    it.skip('POST /api/v2/:model with a bearer token that has create permissions adds an item to the DB and returns an object with the added item', async () => {
        let authenticatedUser = await mockRequest.post('/signup').send(writerUser);
        console.log({authenticatedUser});
        let Token = authenticatedUser.body.token;
        console.log({Token});
        const res = await mockRequest.post('/api/v2/food').send({
            name: "admin",
            console.log({Token});
            password: "adminpassword",
            role: "admin"
        }).set("Authorization", `Bearer ${Token}`);
        let resObj = JSON.parse(res.text);
        // console.log(res.text,"RESSS");
        // console.log(res.status,"STATUSSSSSSSSSS");
        // console.log(typeof (res.text), "Typeeeeee");
        // console.log('objjjjjjjjjjj',m);
        expect(res.status).toBe(201);
        expect(resObj).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                calories: '50',
                type: expect.any(String),
                updatedAt: expect.any(String),
                createdAt: expect.any(String)
            })
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