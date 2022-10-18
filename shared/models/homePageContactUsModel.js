const mongoose = require('mongoose');

const homePageContactUsSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    category: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    lang: {type: String, required: true}
});

module.exports = mongoose.model('homepage-contactus', homePageContactUsSchema);