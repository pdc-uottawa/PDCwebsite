const ProgramCoordinator = require("../models/coordinatorsModel");

const router = require("express").Router();

// get all coordinators
router.get("/program-coordinators", (req, res) => {
    ProgramCoordinator.find((error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

//add new coordinator
router.post("/program-coordinators/add", (req, res) => {
    let name = req.body.name;
    let program = req.body.program;
    let mail = req.body.mail;

    let newPC = new ProgramCoordinator({name, program, mail}).save()

    res.send('Added Successfully');
});

module.exports = router;
