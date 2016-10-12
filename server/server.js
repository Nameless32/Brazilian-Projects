require('./config/mogoose.config');

const express = require('express');
const serverConfig = require('./config/server.config.json');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.static("../frontend"));
app.use(bodyParser.json());
app.use(cors());

consign()
  .include('security')
  .then('routes')
  .into(app);

app.listen(serverConfig.port, () => {
  console.log("server up on port " + serverConfig.port);
});