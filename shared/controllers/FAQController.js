const mongoose = require('mongoose');
const FAQ = require('../models/FAQModel');

const getAllFAQs = async (req, res, next) => {
    const allFAQs = await FAQ.find().exec();
    res.json(allFAQs);
}

const addFAQs= async (req, res, next) => {
    const newFAQ = new FAQ({
        ques: req.body.ques,
        ans: req.body.ans 
    });
    const result = await newFAQ.save();
    res.json(result);
}

const updateFAQs = async (req, res, next) => {
    const id = req.body._id;
    const ques = req.body.ques;
    const ans = req.body.ans;
    const doc = await FAQ.findOneAndUpdate(
        {_id: id},
        { $set: {ques, ans}},
        { upsert: true, new: true },
        (error, data) => {
            if (error) {
              console.log(error);
            }
        }
    )
    res.json(doc);
}

const deleteFAQs = async (req, res, next) => {
    try {
        const doc = await FAQ.findOneAndDelete({ _id: req.body._id });
        doc === null ? res.json("Error while deleting.") : res.json("Success!");
      } catch (err) {
        res.json("Error while deleting.");
      }
}

exports.getAllFAQs = getAllFAQs;
exports.addFAQs = addFAQs;
exports.updateFAQs = updateFAQs;
exports.deleteFAQs = deleteFAQs;