const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programCoordinatorsSchema = new Schema({
  name: String,
  program: String,
  email: String
})

const Link = mongoose.model("program-coordinators", programCoordinatorsSchema);

module.exports = Link;