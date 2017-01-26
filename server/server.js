const express = require('express');


var app = express();

app.get('/', (req, res) =>{
  res.status(404).send({
  error: 'Page not found.',
  name: 'Todo App v1.0'
});
});

app.listen(3000);

var users = [{
  name: 'Ivan',
  country: 'Spain'
},{
  name: 'Miguel',
  country: 'Toronto'
}];

app.get('/users',(req, res) =>{
  res.status(200).send(users);
});

//to access from another files to make any test.
module.exports.app = app;
