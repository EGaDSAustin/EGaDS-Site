const express = require("express");
const mongoose = require("mongoose");

const connectString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SITE}`;
console.log(connectString);

mongoose
  .connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

const loginRouter = require("./routes/login");
const eventsRouter = require("./routes/events");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const videosRouter = require("./routes/videos");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => res.send("hewwo gamer uwu!"));

app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/games", gamesRouter);
app.use("/videos", videosRouter);

app.listen(PORT, () => {
  console.log(`Starting Backend... (port ${PORT})`);
});
