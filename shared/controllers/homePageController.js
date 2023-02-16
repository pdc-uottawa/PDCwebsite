const mongoose = require("mongoose");
const ContactUs = require("../models/homePageContactUsModel");
const Testimonials = require("../models/homePageTestimonialsModel");
const Carousel = require("../models/homePageCarouselModel");
const AboutUs = require("../models/homePageAboutUsModel");
const QueryExecutives = require("../models/homePageQueryExecutivesModel");

const aboutUsData = async (req, res, next) => {
  const allAboutUs = await AboutUs.find().exec();
  res.json(allAboutUs);
};

const updateAboutUsData = async (req, res, next) => {
  const id = req.body._id;
  const image = req.body.image;
  const description = req.body.description;
  const doc = await AboutUs.findOneAndUpdate(
    { _id: id },
    { $set: { image, description } },
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
    }
  );
  res.json(doc);
};

const queryexecutivesData = async (req, res, next) => {
  const allExecutives = await QueryExecutives.find().exec();
  res.json(allExecutives);
};

const carouselData = async (req, res, next) => {
  const allCarousel = await Carousel.find().exec();
  res.json(allCarousel);
};
const addCarouselData = async (req, res, next) => {
  const newCarouselData = new Carousel({
    image: req.body.image,
    description: req.body.description,
    heading: req.body.heading,
  });
  const result = await newCarouselData.save();
  res.json(result);
};

const updateCarouselData = async (req, res, next) => {
  const id = req.body._id;
  const image = req.body.image;
  const description = req.body.description;
  const heading = req.body.heading;
  const doc = await Carousel.findOneAndUpdate(
    { _id: id },
    { $set: { image, description, heading } },
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
    }
  );
  res.json(doc);
};

const deleteCarouselData = async (req, res, next) => {
  try {
    const doc = await Carousel.findOneAndDelete({ _id: req.body._id });
    doc === null ? res.json("Error while deleting.") : res.json("Success!");
  } catch (err) {
    res.json("Error while deleting.");
  }
};

const testimonialData = async (req, res, next) => {
  const allTestimonials = await Testimonials.find().exec();
  res.json(allTestimonials);
};

const addTestimonialData = async (req, res, next) => {
  const newTestimonialData = new Testimonials({
    image: req.body.image,
    description: req.body.description,
    name: req.body.name,
    designation: req.body.designation,
  });
  const result = await newTestimonialData.save();
  res.json(result);
};

const updateTestimonialData = async (req, res, next) => {
  const id = req.body._id;
  const image = req.body.image;
  const description = req.body.description;
  const name = req.body.name;
  const designation = req.body.designation;
  const doc = await Testimonials.findOneAndUpdate(
    { _id: id },
    { $set: { image, description, name, designation } },
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
    }
  );
  res.json(doc);
};

const deleteTestimonialData = async (req, res, next) => {
  try {
    const doc = await Testimonials.findOneAndDelete({ _id: req.body._id });
    doc === null ? res.json("Error while deleting.") : res.json("Success!");
  } catch (err) {
    res.json("Error while deleting.");
  }
};

const contactUsData = async (req, res, next) => {
  const newRequest = new ContactUs({
    fname: req.body.fname,
    lname: req.body.lname,
    category: req.body.category,
    email: req.body.email,
    message: req.body.message,
  });
  const result = await newRequest.save();
  res.json(result);
};

exports.aboutUsData = aboutUsData;
exports.updateAboutUsData = updateAboutUsData;

exports.carouselData = carouselData;
exports.addCarouselData = addCarouselData;
exports.updateCarouselData = updateCarouselData;
exports.deleteCarouselData = deleteCarouselData;

exports.testimonialData = testimonialData;
exports.addTestimonialData = addTestimonialData;
exports.updateTestimonialData = updateTestimonialData;
exports.deleteTestimonialData = deleteTestimonialData;

exports.contactUsData = contactUsData;
exports.queryexecutivesData = queryexecutivesData;
