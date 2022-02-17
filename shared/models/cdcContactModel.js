const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cdcContactModel = new Schema({
  name: String,
  email: String
})

const Link = mongoose.model("cdc-contact-us", cdcContactModel);

module.exports = Link;