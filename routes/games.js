const express = require('express');
const router = express.Router();

const gamesDB = require('../database');
const { v4: uuidv4 } = require('uuid')

/*
  Typically we want to follow CRUD when designing an API:
    - Create (POST)
    - Read (GET)
    - Update (PUT)
    - Delete (DELETE)
*/

/* GET games listing. */
router.get('/', (req, res, next) => {
  const params = req.query; 
  if (params.id) {
    // if we are provided an id, we should only return that game
    res.json(gamesDB[params.id])
    return;
  }
  
  // TODO: Add filtering so we only get the results we want (get games with price under $10). 
  res.status(200).json(gamesDB);
});

/* CREATE games listing */
router.post('/', (req, res, next) => {
  const params = req.body;
  const uuid = uuidv4();
  if (gamesDB[uuid]) {
    res.send("item already exists in our database");
    return;
  }

  // TODO: Take in the data from the request, create a games object using this data, and add this to our database.
  res.status(200).send(uuid);
});

/* UPDATE games listing */
router.put('/', (req, res, next) => {
  const params = req.body; 
  // verifying that id is in the request
  if (!params.id) {
    res.status(400).send("missing id in the request")
    return;
  }

  // TODO: Given the ID and other fields from the request, update the corresponding item in our database.
  res.status(200).send("completed update");
});

/* DELETE games listing */
router.delete('/', (req, res, next) => {
  const params = req.body; 
  // verifying that id is in the request
  if (!params.id) {
    res.status(400).send("missing id in the request")
    return;
  }

  // TODO: Given the ID of the object in our request, delete the corresponding item from our database. 
  res.status(200).send("deleted item successfully");
});

module.exports = router;