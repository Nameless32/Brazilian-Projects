const http = require('http');
const express = require('express');
const serverConfig = require('./server.config.json');

const app = express();

app.use(express.static("../frontend"));

const projects = [
    {
        _id: "1",
        name: "project 1",
        description: "project one ..."
    }, {
        _id: "2",
        name: "project 2",
        description: "project two ..."
    }
];

app.get("/api/project", (req, res) => {
    res.json(projects);
});
app.get("/api/project/:id", (req, res) => {
    res.json(projects[req.params.id - 1]);
});


const members = [
    {
        _id: "1",
        name: "member 1",
        description: "member one ..."
    }, {
        _id: "2",
        name: "member 2",
        description: "member two ..."
    }
];

app.route("/api/member")
    .get((req, res) => {
        res.json(members);
    })
    .post()
    .put();

app.route("/api/member/:id")
    .get((req, res) => {
        res.json(projects[req.params.id -1]);
    });

const server = http.createServer(app);
server.listen(serverConfig.port, () => console.log("up"));



