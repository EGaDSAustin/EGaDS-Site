const express = require("express");
const Game = require("../models/game");
const { extractResponseParams } = require("../utils");

const GameRouter = express.Router();

// TODO: post thing

// routes
// get all requests
GameRouter.get("/", (req, res) => {
  const query = req.query;
  const body = req.body;

  const [reqParams, resParams] = extractResponseParams(query);
  // TODO: paginate?

  // limit find by page number
  Game.find(reqParams).exec((err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(result);
  });
});

// get single game
GameRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = req.query;
  // TODO: verify query params are good

  const [reqParams, resParams] = extractResponseParams(query);

  Game.find({ _id: id, ...reqParams }).exec((err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(result);
  });
});

module.exports = GameRouter;
