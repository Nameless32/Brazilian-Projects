const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, required: true},
    alias: {type: String, required: true, unique: true}
});

const Project = mongoose.model('Project', schema);

module.exports = Project;