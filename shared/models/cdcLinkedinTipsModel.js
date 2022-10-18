const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cdcLinkedInTipsModel = new Schema({
  heading: String,
  description: String,
  active: Boolean,
  lang: {type: String, required: true}
})

const Link = mongoose.model("cdc-linkedin-tips", cdcLinkedInTipsModel);

module.exports = Link;