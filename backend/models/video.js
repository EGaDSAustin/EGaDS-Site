const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Video name required"]
    },
    type : {
        type: String,
        enum: ["talk", "workshop", "other"],
        required: [true, "Video type required"]
    },
    url : {
        type: String,
        required: [true, "Video needs a url to live at"]
    }
});

const Video = mongoose.model('event', VideoSchema);

module.exports = Video
