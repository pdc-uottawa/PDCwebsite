const mongoose = require('mongoose');

const programCoordinatorsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    program: {type: String, required: true},
    email: {type: String, required: true},
    lang: {type: String, required: true}
});

module.exports = mongoose.model("program-coordinators", programCoordinatorsSchema);