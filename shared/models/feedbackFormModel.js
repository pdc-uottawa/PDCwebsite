const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackFormSchema = new Schema({
  link: String
})

const Link = mongoose.model("feedbackformlink", feedbackFormSchema);

module.exports = Link;