const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true}
});

const Project = mongoose.model('Project', schema);

module.exports = Project;