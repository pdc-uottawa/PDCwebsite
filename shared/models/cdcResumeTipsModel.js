const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cdcResumeTipsModel = new Schema({
  category: String,
  tip: String,
  active: Boolean,
  lang: {type: String, required: true}
})

const Link = mongoose.model("cdc-resume-tips", cdcResumeTipsModel);

module.exports = Link;