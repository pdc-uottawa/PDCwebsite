const mongoose = require('mongoose');
const OurVolunteer = require('../models/ourVolunteerModel');

const getAllOurVolunteer = async (req, res, next) => {
    const allOurVolunteer = await OurVolunteer.find().exec();
    res.json(allOurVolunteer);
}

const addOurVolunteer = async (req, res, next) => {
    const newOurVolunteer = new OurVolunteer({
        name: req.body.name,
        email: req.body.email,
        team: req.body.team,
    });
    const result = await newOurVolunteer.save();
    res.json(result);
}

const updateOurVolunteer = async (req, res, next) => {
    const id = req.body._id;
    const name = req.body.name;
    const email = req.body.email;
    const team = req.body.team;
    const doc = await OurVolunteer.findOneAndUpdate(
        {_id: id},
        { $set: {name, email, team}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const deleteOurVolunteer = async (req, res, next) => {
    const id = req.body._id;
    const doc = await OurVolunteer.findOneAndDelete(
        {_id: id},
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

exports.getAllOurVolunteer = getAllOurVolunteer;
exports.addOurVolunteer = addOurVolunteer;
exports.updateOurVolunteer = updateOurVolunteer;
exports.deleteOurVolunteer = deleteOurVolunteer;