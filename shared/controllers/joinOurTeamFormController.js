const mongoose = require('mongoose');
const joinOurTeamForm = require('../models/joinOurTeamFormModel');
const feedbackForm = require('../models/feedbackFormModel');


const getFormLink = async (req, res, next) => {
    const formLink = await joinOurTeamForm.find().exec();
    res.json(formLink);
}

const updateJoinTeamLink = async (req, res, next) => {
    const id = req.body._id;
    const link = req.body.link;
    const doc = await joinOurTeamForm.findOneAndUpdate(
        {_id: id},
        { $set: {link}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const getFeedbackFormLink = async (req, res, next) => {
    const formLink = await feedbackForm.find().exec();
    res.json(formLink);
}

const updateFeedbackFormLink= async (req, res, next) => {
    const id = req.body._id;
    const link = req.body.link;
    const doc = await feedbackForm.findOneAndUpdate(
        {_id: id},
        { $set: {link}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

exports.getFormLink = getFormLink;
exports.updateJoinTeamLink = updateJoinTeamLink;
exports.getFeedbackFormLink = getFeedbackFormLink;
exports.updateFeedbackFormLink = updateFeedbackFormLink;