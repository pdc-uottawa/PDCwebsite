const mongoose = require('mongoose');
const ContactUs = require('../models/homePageContactUsModel');
const Testimonials = require('../models/homePageTestimonialsModel');
const Carousel = require('../models/homePageCarouselModel');
const AboutUs = require('../models/homePageAboutUsModel');
const QueryExecutives = require('../models/homePageQueryExecutivesModel');

const aboutUsData = async (req, res, next) => {
    const allAboutUs = await AboutUs.find().exec();
    res.json(allAboutUs);
}

const queryexecutivesData = async (req, res, next) => {
    const allExecutives = await QueryExecutives.find().exec();
    res.json(allExecutives);
}

const carouselData = async (req, res, next) => {
    const allCarousel = await Carousel.find().exec();
    res.json(allCarousel);
}

const testimonialData = async (req, res, next) => {
    const allTestimonials = await Testimonials.find().exec();
    res.json(allTestimonials);
}

const contactUsData = async (req, res, next) => {
    const newRequest = new ContactUs({
        fname: req.body.fname,
        lname: req.body.lname,
        category: req.body.category,
        email: req.body.email,
        message: req.body.message
    });
    const result = await newRequest.save();
    res.json(result);
}

exports.aboutUsData = aboutUsData;
exports.carouselData = carouselData;
exports.testimonialData = testimonialData;
exports.contactUsData = contactUsData;
exports.queryexecutivesData = queryexecutivesData;