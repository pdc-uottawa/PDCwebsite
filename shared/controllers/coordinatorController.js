const mongoose = require('mongoose');
const Coordinators = require('../models/coordinatorsModel');

const getAllCoordinators = async (req, res, next) => {
    const allCoordinators = await Coordinators.find().exec();
    res.json(allCoordinators);
}

const addCoordinators = async (req, res, next) => {
    const newCoordinator = new Coordinators({
        name: req.body.name,
        program: req.body.program,
        email: req.body.email,
    });
    const result = await newCoordinator.save();
    res.json(result);
}

const updateCoordinator = async (req, res, next) => {
    const id = req.body._id;
    const name = req.body.name;
    const program = req.body.program;
    const email = req.body.email;
    const doc = await Coordinators.findOneAndUpdate(
        {_id: id},
        { $set: {name, program, email}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const deleteCoordinator = async (req, res, next) => {
    const id = req.body._id;
    const doc = await Coordinators.findOneAndDelete(
        {_id: id},
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

exports.getAllCoordinators = getAllCoordinators;
exports.addCoordinators = addCoordinators;
exports.updateCoordinator = updateCoordinator;
exports.deleteCoordinator = deleteCoordinator;