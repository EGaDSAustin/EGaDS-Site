const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "User name required"],
  },
  type: {
    type: String,
    enum: ["member", "alum", "officer", "jo", "general", "industry", "staff"],
    required: [true, "Person type required"],
  },
  discipline: {
    type: String,
    required: [true, "Discipline required"],
  },
  year: {
    type: String,
    enum: [
      "freshman",
      "sophomore",
      "junior",
      "senior",
      "super senior",
      "old",
      "non-student",
    ],
    required: [true, "Year for student users required"],
  },
  games: [mongoose.Schema.Types.ObjectId],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
