const express = require("express");

const User = require("../models/user");
const { extractResponseParams } = require("../utils");

const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  const query = req.query;
  const body = req.body;

  const [reqParams, resParams] = extractResponseParams(query);

  User.find(reqParams).exec((err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(result);
  });
});

module.exports = UserRouter;
