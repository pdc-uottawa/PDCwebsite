const router = require("express").Router();
var auth = function(req, res, next) {

  if(req.user.admin) {

      return next();

  } else {

      return res.status(400)

  }
};

var authUser = function(req, res, next) {

  if(!req.linkedin) {

      return next();

  } else {

      return res.status(400)

  }
};
router.post("/upload",authUser, (req, res) => {
  res.send("uploaded successfully");
});

module.exports = router;
