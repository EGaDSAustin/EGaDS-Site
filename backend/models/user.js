const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {
        type: String,
        require: [true, "Event name required"]
    },
    

});

let User;
try {
  User = mongoose.model('user');
} catch (error) {
  User = mongoose.model('user', UserSchema);
}


module.exports = User
