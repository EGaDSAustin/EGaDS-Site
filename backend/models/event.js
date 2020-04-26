const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Event name required"],
  },
  type: {
    type: String,
    enum: ["gm", "workshop", "devnight", "social", "other"],
    required: [true, "Event type required"],
  },
  location: {
    type: String,
    required: [true, "Event location required"],
  },
  time: {
    type: Date,
    required: [true, "Time of event is required"],
  },
  banner: String,
});

const Event = mongoose.model("event", EventSchema);
module.exports = Event;
