const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  People.get() //todo need to return
    .then((people) => {
      res.json(people);
    })
    .catch(() => console.error('ERROR GETTING PEOPLE')); //do we get a specific person?
});

router.post('/', json, (req, res) => {
  //get person from json body
  const { name } = req.body;
  People.enqueue(name).then(() => {
    res.status(201).end();
  });
});

router.delete('/', (req, res) => {
  People.dequeue().then((person) => {
    res.status(204).json(person);
  });
});

module.exports = router;
