const ApplyForm = require("../models/StudentApplyModel");
const User = require("../models/UserModel");
const Project = require("../models/ProjectModel");
const { secured } = require("./utils")
var ObjectId = require('mongodb').ObjectID;
const router = require("express").Router();
//secured by Makwana Harsh

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



// create a new application
router.post("/apply", (req, res) => {
  let newApply = req.body;

  //update user table for student number and name and other user details too
  ApplyForm.find(
    {
      projectId: newApply.projectId,
      email: newApply.email,
    },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      if (data.length !== 0) {
        res.send("You have already applied");
      } else {
        ApplyForm.create(newApply, (error, doc) => {
          if (error) {
            console.log(error);
          }
          res.send("added successfully");
        });
      }
    }
  );
});

router.get("/apply/:id", secured, (req, res) => {
  let projectId = req.params.id;
  ApplyForm.find({ projectId: projectId }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.get("/appliedprojects/:email",authUser, (req, res) => {
  let email = req.params.email;
  ApplyForm.find({ email: email }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.get("/profile/:id", authUser, (req, res) => {
  let studentId = req.params.id;
  User.find({ _id: studentId }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.post("/profile/edit/", authUser,(req, res) => {
  let updatedProfile = req.body;
  let id = updatedProfile.studentId;
  User.findOneAndUpdate(
    { _id: id },
    updatedProfile,
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      res.json({
        user: data,
        message: "updated successfully",
      });
    }
  );
});

router.post("/appliedprojectsDetails/",authUser,(req, res) => {
  let ProjectIDs = req.body;

  var obj_ids = ProjectIDs.map(function(id) { return ObjectId(id); });
  Project.find({_id: {$in: obj_ids}}, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});
module.exports = router;
