const mongoose = require('mongoose');

const homePageAboutUsSchema = new mongoose.Schema({
    image: {type: String, required: true},
    description: {type: String, required: true},
    lang: {type: String, required: true}
});

module.exports = mongoose.model('homepage-aboutus', homePageAboutUsSchema);