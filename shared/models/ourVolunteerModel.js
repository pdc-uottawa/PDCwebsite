const mongoose = require('mongoose');

const ourVolunteerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    team: {type: String, required: true},
    lang: {type: String, required: true}
});

module.exports = mongoose.model('ourVolunteers', ourVolunteerSchema);