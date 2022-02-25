const mongoose = require('mongoose');

const homePageTestimonialSchema = new mongoose.Schema({
    image: {type: String, required: true},
    designation: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('homepage-testimonials', homePageTestimonialSchema);