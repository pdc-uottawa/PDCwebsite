const mongoose = require('mongoose');
const CDCLinks = require('../models/cdcLinksModel');
const CDCContact = require('../models/cdcContactModel');
const CDCInterview = require('../models/cdcInterviewQuesModel');
const CDCResume = require('../models/cdcResumeTipsModel');
const CDCLinkedIn = require('../models/cdcLinkedinTipsModel');

//Links
const getAllLinks = async (req, res, next) => {
    const allLinks = await CDCLinks.find({"active": true}).exec();
    res.json(allLinks);
}

const updateLinks = async (req, res, next) => {
    const id = req.body._id;
    const name = req.body.name;
    const link = req.body.link;
    const active = req.body.active;
    const doc = await CDCLinks.findOneAndUpdate(
        {_id: id},
        { $set: {name, link, active}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}


//Resume Tips
const getAllResumeTips = async (req, res, next) => {
    console.log('HELLO')
    const allResumeTips = await CDCResume.find({"active": true}).exec();
    res.json(allResumeTips);
}

const addResumeTips = async (req, res, next) => {
    const newResumeTip = new CDCResume({
        category: req.body.category,
        tip: req.body.tip,
        active: req.body.active,
    });
    const result = await newResumeTip.save();
    res.json(result);
}

const updateResumeTips = async (req, res, next) => {
    const id = req.body._id;
    const category = req.body.category;
    const tip = req.body.tip;
    const active = req.body.active;
    const doc = await CDCResume.findOneAndUpdate(
        {_id: id},
        { $set: {category, tip, active}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}


//LinkedIn Tips
const getAllLinkedInTips = async (req, res, next) => {
    const allLinkedInTips = await CDCLinkedIn.find({"active": true}).exec();
    res.json(allLinkedInTips);
}

const addLinkedInTips = async (req, res, next) => {
    const newLinkedInTip = new CDCLinkedIn({
        heading: req.body.heading,
        description: req.body.description,
        active: req.body.active,
    });
    const result = await newLinkedInTip.save();
    res.json(result);
}

const updateLinkedInTips = async (req, res, next) => {
    const id = req.body._id;
    const heading = req.body.heading;
    const description = req.body.description;
    const active = req.body.active;
    const doc = await CDCLinkedIn.findOneAndUpdate(
        {_id: id},
        { $set: {heading, description, active}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}


//Interview Questions
const getAllInterviewQuestions = async (req, res, next) => {
    const allInterviewQuestions = await CDCInterview.find({"active": true}).exec();
    res.json(allInterviewQuestions);
}

const addInterviewQuestions = async (req, res, next) => {
    const newInterviewQues = new CDCInterview({
        category: req.body.category,
        ques: req.body.ques,
        active: req.body.active,
    });
    const result = await newInterviewQues.save();
    res.json(result);
}

const updateInterviewQuestions = async (req, res, next) => {
    const id = req.body._id;
    const category = req.body.category;
    const ques = req.body.ques;
    const active = req.body.active;
    const doc = await CDCInterview.findOneAndUpdate(
        {_id: id},
        { $set: {category, ques, active}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}


//Contact Information
const getAllContactInformation = async (req, res, next) => {
    const allContactInformation = await CDCContact.find().exec();
    res.json(allContactInformation);
}

const addContactInformation = async (req, res, next) => {
    const newContactInformation = new CDCContact({
        name: req.body.name,
        email: req.body.email,
    });
    const result = await newContactInformation.save();
    res.json(result);
}

const updateContactInformation = async (req, res, next) => {
    const id = req.body._id;
    const name = req.body.name;
    const email = req.body.email;
    const doc = await CDCContact.findOneAndUpdate(
        {_id: id},
        { $set: {name, email}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

exports.getAllLinks = getAllLinks;
exports.updateLinks = updateLinks;
exports.getAllResumeTips = getAllResumeTips;
exports.addResumeTips = addResumeTips;
exports.updateResumeTips = updateResumeTips;
exports.getAllLinkedInTips = getAllLinkedInTips;
exports.addLinkedInTips = addLinkedInTips;
exports.updateLinkedInTips = updateLinkedInTips;
exports.getAllInterviewQuestions = getAllInterviewQuestions;
exports.addInterviewQuestions = addInterviewQuestions;
exports.updateInterviewQuestions = updateInterviewQuestions;
exports.getAllContactInformation = getAllContactInformation;
exports.addContactInformation = addContactInformation;
exports.updateContactInformation = updateContactInformation;