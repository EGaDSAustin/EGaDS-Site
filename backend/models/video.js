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

let Video;
try {
  Video = mongoose.model('video');
} catch (error) {
  Video = mongoose.model('video', VideoSchema);
}

module.exports = Video
