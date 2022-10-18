const mongoose = require('mongoose');

const fswepProgramSchema = new mongoose.Schema({
    ques: {type: String, required: true},
    ans: {type: String, required: true},
    lang: {type: String, required: true}
});

const fswepPrograms = mongoose.model('FAQs', fswepProgramSchema);

module.exports= fswepPrograms;