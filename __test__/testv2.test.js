'use strict';
// var should = require('should');
process.env.SECRET = "TEST_SECRET";
const {db} = require('../src/models/index');
const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

describe('useless api endpoint', function() {
  var token;
  beforeAll(function(done) {
    request.post('/signup')
      .send({
     name: "writer",
     password: "writerpassword",
     role: "writer"
      })
      .end(function(err, res) {
        if (err) throw err;
        token = { access_token: res.body.token }
        done();
      });
  });
  
  it('posts an object', function(done) {
    request.post('/api/v2/food')
        .send({
            name: "strawberry",
            calories: "50",
            type: "fruit" })
      .query(token)
      .expect(201)
      .end(function(err, res) {
        // should(err).equal(null);
        done()
      });
  });
});