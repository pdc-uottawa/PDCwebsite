const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    currentPosition: {type: String, required: true},
    linkedIn: {type: String, required: true},
    email: {type: String, required: true}
});

module.exports = mongoose.model('alumni-infos', alumniSchema);