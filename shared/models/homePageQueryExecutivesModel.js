const mongoose = require('mongoose');

const homePageQueryExecutivesSchema = new mongoose.Schema({
    category: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    lang: {type: String, required: true}
});

module.exports = mongoose.model('homepage-queryexecutives', homePageQueryExecutivesSchema);