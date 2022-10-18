const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteersSchema = new Schema({
  category: { type: String, required: true},
  name: { type: String, required: true},
  email: { type: String, required: true},
  position: { type: String, required: true},
  lang: {type: String, required: true}
})

const Link = mongoose.model("volunteers", volunteersSchema);

module.exports = Link;