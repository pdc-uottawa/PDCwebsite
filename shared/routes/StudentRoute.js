const ApplyForm = require("../models/StudentApplyModel");
const User = require("../models/UserModel");

const router = require("express").Router();

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

router.get("/apply/:id", (req, res) => {
  let projectId = req.params.id;
  ApplyForm.find({ projectId: projectId }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.get("/appliedprojects/:email", (req, res) => {
  let email = req.params.email;
  ApplyForm.find({ email: email }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.get("/profile/:id", (req, res) => {
  let studentId = req.params.id;
  User.find({ _id: studentId }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.post("/profile/edit/", (req, res) => {
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


module.exports = router;
