const router = require("express").Router();
const User = require("../models/UserModel");
//secured by Makwana Harsh

var auth = function(req, res, next) {

  if(req.user.admin) {

      return next();

  } else {

      return res.status(400)

  }
};

router.get("/completeuserlist",auth, (req, res) => {
  User.find((error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.get("/adminuserlist",auth, (req, res) => {
  User.find({ "admin": "true" },(error, data) => {
    if (error) {
      console.log(error);
    }
 
    res.send(data);
  });
});

module.exports = router;
