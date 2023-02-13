const mongoose = require('mongoose');
const ourTeam = require('../models/ourTeamModel');

const getOurTeam = async (req, res, next) => {
    const allOurTeam = await ourTeam.find().exec();
    res.json(allOurTeam);
}

const addOurTeam = async (req, res, next) => {
    const newOurTeam = new ourTeam({
        image: req.body.image,
        name: req.body.name,
        position: req.body.position,
        linkedIn: req.body.linkedIn,
        email: req.body.email,
    });
    const result = await newOurTeam.save();
    res.json(result);
}

const updateOurTeam = async (req, res, next) => {
    const id = req.body._id;
    const image = req.body.image;
    const name = req.body.name;
    const position = req.body.position;
    const linkedIn = req.body.linkedIn;
    const email = req.body.email;
    const doc = await ourTeam.findOneAndUpdate(
        {_id: id},
        { $set: {image, name, position, linkedIn, email}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const deleteOurTeam = async (req, res, next) => {
    try {
        const doc = await ourTeam.findOneAndDelete({ _id: req.body._id });
        doc === null ? res.json("Error while deleting.") : res.json("Success!");
      } catch (err) {
        res.json("Error while deleting.");
      }
}

exports.getOurTeam = getOurTeam;
exports.addOurTeam = addOurTeam;
exports.updateOurTeam = updateOurTeam;
exports.deleteOurTeam = deleteOurTeam;