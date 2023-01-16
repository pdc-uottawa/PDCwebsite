const mongoose = require('mongoose');

const ourTeamSchema = new mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    position: {type: String, required: false},
    linkedIn: {type: String, required: true},
    email: {type: String, required: true}
});

module.exports = mongoose.model('our-team-infos', ourTeamSchema);