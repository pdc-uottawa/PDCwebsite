const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cdcInterviewQuesModel = new Schema({
  category: String,
  ques: String,
  active: Boolean
})

const Link = mongoose.model("cdc-interview-questions", cdcInterviewQuesModel);

module.exports = Link;