const express = require("express");
const Video = require("../models/video");
const { extractResponseParams } = require("../utils");

const VideoRouter = express.Router();
console.log("sudhaskdh");

// routes
// get all requests
VideoRouter.get("/", (req, res) => {
  const query = req.query;
  const body = req.body;

  const [reqParams, resParams] = extractResponseParams(query);
  // TODO: paginate?

  // limit find by page number
  Video.find(reqParams).exec((err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(result);
  });
});

// get single video
VideoRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = req.query;
  // TODO: verify query params are good

  const [reqParams, resParams] = extractResponseParams(query);

  Video.find({ _id: id, ...reqParams }).exec((err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(result);
  });
});

module.exports = VideoRouter;
