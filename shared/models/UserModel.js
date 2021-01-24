const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  linkedinId: String,
  outlookId: String,
  name: String,
  email: String,
  picture: String,
  admin: Boolean,
  company: Boolean,
  phoneNumber:String,
  program:String,
  skills:String,
  studentNumber:String
});

const User = mongoose.model("pdc-users", userSchema);

module.exports = User;
