const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Game needs a nameeeee"],
  },
  url: {
    type: String,
    required: [true, "Game needs a url to live at"],
  },
  contributors: {
    type: [mongoose.Schema.Types.ObjectId],
    required: [true, "Game needs members"],
  },
});
const Game = mongoose.model("game", GameSchema);

Game.create(
  {
    name: "Potato Game",
    url: "potato.com",
    contributors: [],
  },
  (res, err) => {}
);

module.exports = Game;
