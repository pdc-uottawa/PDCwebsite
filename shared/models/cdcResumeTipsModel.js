const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cdcResumeTipsModel = new Schema({
  category: String,
  tip: String,
  active: Boolean
})

const Link = mongoose.model("cdc-resume-tips", cdcResumeTipsModel);

module.exports = Link;