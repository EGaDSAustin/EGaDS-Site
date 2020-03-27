const express = require('express');

const HOST = "127.0.0.1";
// const HOST = "0.0.0.0";
const PORT = 1234;
const app = express();


app.get('/', (req, res) => res.send('hello!'));
app.listen(HOST, PORT);
console.log(`Starting Backend... (port ${PORT})`);


/*
Docker build coommands

docker build --tag egads-backend:1.0 .

docker run -it -w /usr/src/app 
docker run -d -v ./:/usr/src/app/ --name backend egads-backend:1.0
*/