const mongoose = require('mongoose');
const Alumni = require('../models/alumniModel');

const getAllAlumni = async (req, res, next) => {
    const allAlumni = await Alumni.find().exec();
    res.json(allAlumni);
}

const addAlumni = async (req, res, next) => {
    const newAlumni = new Alumni({
        image: req.body.image,
        name: req.body.name,
        currentPosition: req.body.currentPosition,
        linkedIn: req.body.linkedIn,
        email: req.body.email,
        founder: req.body.founder
    });
    const result = await newAlumni.save();
    res.json(result);
}

const updateAlumni = async (req, res, next) => {
    const id = req.body._id;
    const image = req.body.image;
    const name = req.body.name;
    const currentPosition = req.body.currentPosition;
    const linkedIn = req.body.linkedIn;
    const email = req.body.email;
    const founder = req.body.founder;
    const doc = await Alumni.findOneAndUpdate(
        {_id: id},
        { $set: {image, name, currentPosition, linkedIn, email, founder}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const deleteAlumni = async (req, res, next) => {
    const id = req.body._id;
    const doc = await Alumni.findOneAndDelete(
        {_id: id},
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

exports.getAllAlumni = getAllAlumni;
exports.addAlumni = addAlumni;
exports.updateAlumni = updateAlumni;
exports.deleteAlumni = deleteAlumni;