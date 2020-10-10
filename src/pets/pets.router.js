const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  Pets.get()
    .then((pet) => {
      res.json(pet);
    })
    .catch(() => console.error('ERROR GETTING PETS'));
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type).then((pet) => {
    //res.status(204).json(pet);
  });

  People.dequeue().then((person) => {
    res.status(204).json(person);
  });
});

module.exports = router;
