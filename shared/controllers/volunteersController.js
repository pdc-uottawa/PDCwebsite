const mongoose = require('mongoose');
const Volunteers = require('../models/volunteersModel');

const getAllVolunteers = async (req, res, next) => {
    const allVolunteers = await Volunteers.find().exec();
    res.json(allVolunteers);
}

const addVolunteers = async (req, res, next) => {
    const newVolunteer = new Volunteers({
        category: req.body.category,
        name: req.body.name,
        email: req.body.email,
        position: req.body.position
    });
    const result = await newVolunteer.save();
    res.json(result);
}

const updateVolunteer = async (req, res, next) => {
    const id = req.body._id;
    const category = req.body.category;
    const name = req.body.name;
    const email = req.body.email;
    const position = req.body.position;
    const doc = await Volunteers.findOneAndUpdate(
        {_id: id},
        { $set: {category, name, email, position}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

exports.getAllVolunteers = getAllVolunteers;
exports.addVolunteers = addVolunteers;
exports.updateVolunteer = updateVolunteer;