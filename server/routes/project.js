const Project = require('../model/Project');

module.exports = (app) => {

    app.route('/api/project')
        .get((req, res) => {
            Project.find().then(
                docs => res.json(docs),
                err => res.status(500).send(err)
            );
        })
        .post((req, res) => {

        })
        .put();

};

module.exports = (app) => {

    app.route('/api/project')
        .get(memberRequired)
        .post(adminRequired)
        .put(adminRequired)
    ;

    app.route('/api/member')
        .get(memberRequired)
        .post(adminRequired)
        .put(adminRequired)
    ;

};

const memberRequired = (req, res, next) => {
    if (!req.user) {
        res.status(401).send();
    }

    if (req.user.isAdmin()) {
        next();
    } else {
        res.status(403).send();
    }
};

const adminRequired = (req, res, next) => {
    if (!req.user) {
        res.status(401).send();
    }

    if (req.user.isAdmin()) {
        next();
    } else {
        res.status(403).send();
    }
};