const mongoose = require('mongoose');
const FswepProgram = require('../models/fswepProgramModel');

const getAllFswepPrograms = async (req, res, next) => {
    const allFswepPrograms = await FswepProgram.find().exec();
    res.json(allFswepPrograms);
}

const addFswepPrograms= async (req, res, next) => {
    const newFswepProgram = new FswepProgram({
        name: req.body.name,
        active: req.body.active, 
    });
    const result = await newFswepProgram.save();
    res.json(result);
}

const updateFswepPrograms = async (req, res, next) => {
    const id = req.body._id;
    const name = req.body.name;
    const active = req.body.active;
    const doc = await FswepProgram.findOneAndUpdate(
        {_id: id},
        { $set: {name, active}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const deleteFswepPrograms = async (req, res, next) => {
    try {
        const doc = await FswepProgram.findOneAndDelete({ _id: req.body._id });
        doc === null ? res.json("Error while deleting.") : res.json("Success!");
      } catch (err) {
        res.json("Error while deleting.");
      }
}

exports.getAllFswepPrograms = getAllFswepPrograms;
exports.addFswepPrograms = addFswepPrograms;
exports.updateFswepPrograms = updateFswepPrograms;
exports.deleteFswepPrograms = deleteFswepPrograms;