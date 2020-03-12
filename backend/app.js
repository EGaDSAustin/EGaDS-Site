const express = require('express');

const HOST = "127.0.0.1";
// const HOST = "0.0.0.0";
const PORT = 8080;

const app = express();

app.listen(HOST, PORT);
console.log(`Starting Backend... (port ${PORT})`);