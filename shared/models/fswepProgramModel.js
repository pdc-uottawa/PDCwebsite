const mongoose = require('mongoose');

const fswepProgramSchema = new mongoose.Schema({
    name: {type: String, required: true},
    active: {type: Boolean, required: true},
});

const fswepPrograms = mongoose.model('fswepprograms', fswepProgramSchema);

module.exports= fswepPrograms;