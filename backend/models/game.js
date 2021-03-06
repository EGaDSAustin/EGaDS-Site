const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Game needs a nameeeee"]
    },
    url : {
        type: String,
        required: [true, "Game needs a url to live at"]        
    },
    members : {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Game needs members"]
    }


});


let Game;
try {
  Game = mongoose.model('game');
} catch (error) {
  Game = mongoose.model('game', GameSchema);
}

module.exports = Game
