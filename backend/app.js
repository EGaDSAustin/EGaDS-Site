const express = require("express");
const loginRouter = require("./routes/login");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => res.send("hello!"));

app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`Starting Backend... (port ${PORT})`);
});
