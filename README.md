# Petful Server

## Authors:

Jim Smith and Michael Oldacre

## Live Demo

https://client-eta-cyan.vercel.app/

## Description

This is the api backend for the Petful application.

### /pets

- GET/ Returns a json object with two key values (cats and dogs) each with an array of all pets of the appropriate species.
- DELETE/ Requires a request body specifying which pet queue to remove from (dogs, cats, or both). A pet should be deleted from the queue when it is adopted.

### /people

- GET/ Returns an array of all people in line waiting to adopt a cat and/or dog
- POST/ A user provides their contact info to be added to the line to adopt a pet
- DELETE/ People should be removed from the line after they've adopted a pet

## Tech Stack

### Web Client

- HTML
- CSS
- JavaScript
- React

### API Server

- Node
- Express
