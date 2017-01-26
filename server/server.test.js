const request = require('supertest');
const expect = require('expect');

//to take the app to test.
var app = require('./server').app;

describe('App Test',()=>{
  describe('GET /',()=>{
    it('Should return hello world response', (done) => {
      request(app)
      .get('/')
      .expect(404)
      .expect((res) =>{
        expect(res.body).toInclude({error: 'Page not found.'});
      })
      .end(done);
    });
  });

  describe('GET /users',()=>{
    it('should return exist an user',(done)=>{
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) =>{
        expect(res.body).toInclude({ country: 'Spain', name: 'Ivan' })
      })
      .end(done);
    });
  });

});
