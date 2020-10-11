const mongoose = require('mongoose');

const User = mongoose.Schema({
    name : {
        type: String,
        require: [true, "Event name required"]
    },
    

});

module.exports = User
