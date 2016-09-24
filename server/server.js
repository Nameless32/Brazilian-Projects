const http = require('http');
const express = require('express');
const serverConfig = require('./server.config.json');


const app = express();

app.use(express.static("../frontend"));



const server = http.createServer(app);
server.listen(serverConfig.port, () => console.log("up"));



