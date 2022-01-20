const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const joinOurTeamFormSchema = new Schema({
  link: String
})

const Link = mongoose.model("join-our-team-links", joinOurTeamFormSchema);

module.exports = Link;