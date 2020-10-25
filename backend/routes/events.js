const express = require("express");
const Event = require("../models/event");
const { extractResponseParams } = require("../utils");

const EventRouter = express.Router();

// routes
// get all requests
EventRouter.get("/", (req, res) => {
  const query = req.query;
  const body = req.body;

  const [reqParams, resParams] = extractResponseParams(query);
  console.log("Heyo Requesting shit... he he...");
  // TODO: paginate?

  // limit find by page number
  Event.find(reqParams).exec((err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("boi here");

    console.log(result.toString());
    console.log("here");
    res.json({ ...result });
  });
});

// get single event
EventRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = req.query;
  // TODO: verify query params are good

  const [reqParams, resParams] = extractResponseParams(query);

  Event.find({ _id: id, ...reqParams }).exec((err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(result);
  });
});

module.exports = EventRouter;
