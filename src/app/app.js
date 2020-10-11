require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { NODE_ENV } = require('../config');

const app = express();

app.use(cors);

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
