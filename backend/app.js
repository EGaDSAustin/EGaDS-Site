const express = require("express");
const mongoose = require("mongoose");

const connectString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SITE}`;
console.log(connectString);

mongoose
  .connect(connectString, { useNewUrlParser: true })
  .catch((err) => console.log(err));

const loginRouter = require("./routes/login");
const eventsRouter = require("./routes/events");
const gamesRouter = require("./routes/login");
const usersRouter = require("./routes/users");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => res.send("hewwo gamer uwu!"));

app.use("/login", loginRouter);
app.use("/user", usersRouter);
app.use("/event", eventsRouter);
app.use("/game", gamesRouter);

app.listen(PORT, () => {
  console.log(`Starting Backend... (port ${PORT})`);
});
