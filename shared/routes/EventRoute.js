const Event = require("../models/EventModel");
const router = require("express").Router();
//secured by Makwana Harsh
var auth = function(req, res, next) {

  if(req.user.admin) {

      return next();

  } else {

      return res.status(400)

  }
};


router.post("/event", auth, (req, res) => {
  let newEvent = req.body;
  console.log(req);
  Event.create(newEvent, (error, doc) => {
    if(error) {
      console.log(error)
    }
    res.send("event added successfully")
  })
}) 

module.exports = router;