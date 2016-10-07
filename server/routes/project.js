const Project = require('../model/Project')

module.exports = (app) => {

    app.route('/api/project')
        .get((req, res) => {
            Project.find().then(
                docs => res.json(docs),
                err => res.status(500).send(err)
            );
        })
        .post()
        .put();

};