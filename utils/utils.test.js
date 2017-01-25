const expect = require('expect');

const utils = require('./utils');

//Define a test case with 2 arguments
it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44, `Expected 44, but got ${res}`);
  expect(res).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`);
  // }
});


it('should square one number', () => {
  var res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
  // if(res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}`);
  // }
});

it('should expect some values', () => {
  // expect(12).toNotBe(12);

  //Objects always have to be compare with toEqual, not with toBe
  expect({name: 'Ivan'}).toEqual({name: 'Ivan'});
  expect([2,3,4]).toExclude(1);
  expect([2,3,4]).toInclude(4);
  expect({
    name: 'Ivan',
    age: 27,
    location: 'Spain'
  }).toInclude({
    age: 27
  })
});

//should verify first and lastName are set.
//asserts it includes firstName and lastName with propers Values.

it('should includes firstName and lastName values', () => {
  var user = ({ age: 27, location: 'Madrid'});
  var res = utils.setName(user, 'Luis Pereza');
  //res and user are going to be the same since the object is pass for reference.

  expect(res).toInclude({
    age: 27,
    location: 'Madrid'
  })

  // expect(res.firstName).toBe('string').toInclude('Luis');
});
