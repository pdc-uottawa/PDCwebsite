const mongoose = require('mongoose');
const studentAssociation = require('../models/studentAssociationModel');

const getAllstudentAssociation = async (req, res, next) => {
    const allstudentAssociation = await studentAssociation.find().exec();
    res.json(allstudentAssociation);
}

const addstudentAssociation = async (req, res, next) => {
    const newstudentAssociation = new studentAssociation({
        name: req.body.name,
        status: req.body.status,
        link: req.body.link,
    });
    const result = await newstudentAssociation.save();
    res.json(result);
}

const updatestudentAssociation = async (req, res, next) => {
    const id = req.body._id;
    const name = req.body.name;
    const status = req.body.status;
    const link = req.body.link;
    const doc = await studentAssociation.findOneAndUpdate(
        {_id: id},
        { $set: {name, status, link}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const deletestudentAssociation = async (req, res, next) => {
    const id = req.body._id;
    const doc = await studentAssociation.findOneAndDelete(
        {_id: id},
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

exports.getAllstudentAssociation = getAllstudentAssociation;
exports.addstudentAssociation = addstudentAssociation;
exports.updatestudentAssociation = updatestudentAssociation;
exports.deletestudentAssociation = deletestudentAssociation;