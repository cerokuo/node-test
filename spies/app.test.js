const expect = require('expect');
const rewire = require('rewire');

//Load the file throw require and new methods of rewire api provide.
var app = rewire('./app.js');

describe('App',() =>{

  var db = {
    saveUser: expect.createSpy()
  };

  //the object db is going to sustitude db from db.js
  app.__set__('db', db);

  it('should call spie correctly', () => {
    var spy = expect.createSpy();
    spy('Ivan', 32);
    expect(spy).toHaveBeenCalledWith('Ivan', 32);
  });

  it('should call save user, with user object', () => {
    var email = 'ivan@example.com';
    var password = 'abcd1234';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
