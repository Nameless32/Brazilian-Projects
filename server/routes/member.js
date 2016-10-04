const Member = require('../model/Member');
const toHash = require('../util/toHash');

module.exports = (app) => {

  app.route('/api/member')
    .get((req, res) => {
      Member.find().then(
        docs => res.json(docs),
        err => res.status(500)
      );
    })
    .post((req, res) => {
      console.log(req.body);
      req.body.password = toHash(req.body.password);
      Member.create(req.body).then(
        doc => res.json(doc),
        err => res.status(500).send(err)
      );
    })
    .put((req, res) => {
      const query = {_id : req.body._id};
      Member.update(query, {$set: req.body}).then(
        doc => res.json(doc),
        err => res.status(500).send(err)
      );
    });

  app.route('/api/member/:id')
    .get((req, res) => {
      Member.findById(req.params.id).then(
        doc => res.json(doc),
        err => res.status(500)
      );
    });

};