const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {type: String, required: true},
  hostedBy: {type: String, required: true},
  logoUrl: {type: String, required: true},
  postedOn: {type: String, required: true},
  validUntil: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: Array, required: true},
  user: {type: Array, required: true},
  contactPhone: {type: String, required: true},
  contactEmail: {type: String, required: true},
  linkedinProfile: {type: String, required: true},
  isDeleted: {type: Boolean, required: true},  //used for activating deactivating project
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
