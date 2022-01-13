const CDCLinks = require("../models/cdcLinksModel");
const CDCResumeTips = require("../models/cdcResumeTipsModel");
const CDCLinkedInTips = require("../models/cdcLinkedinTipsModel");
const CDCInterviewQues= require("../models/cdcInterviewQuesModel");
const CDCContactUs= require("../models/cdcContactModel");

const router = require("express").Router();


// get all links
router.get("/links", (req, res) => {
    CDCLinks.find({"active": true}, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

//update link
router.post("/links/update", (req, res) => {
    let name = req.body.name;
    let updatedLink = req.body.updatedLink;
    let active = req.body.active;
    
    CDCLinks.findOneAndUpdate(
      { name },
      { $set: {link: updatedLink, active }},
      { upsert: true, new: true },
      (error, data) => {
        if (error) {
          console.log(error);
        }
        res.send("Updated Successfully!");
      }
    );
  });


// get all resume tips
router.get("/resumetips", (req, res) => {
    CDCResumeTips.find({"active": true}, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

// add resume tip
router.post("/resumetips/add", (req, res) => {
    let category = req.body.category;
    let tip = req.body.tip;
    let active = req.body.active;

    let newTip = new CDCResumeTips({category, tip, active}).save()

    res.send('Added Successfully');
});

//update resume tips
router.post("/resumetips/update", (req, res) => {
    let tip = req.body.tip;
    let active = req.body.active;
    
    CDCResumeTips.findOneAndUpdate(
      { tip },
      { $set: { active }},
      { upsert: true, new: true },
      (error, data) => {
        if (error) {
          console.log(error);
        }
        res.send(data);
      }
    );
  });

  // get all linkedin tips
router.get("/linkedintips", (req, res) => {
  CDCLinkedInTips.find({"active": true}, (error, data) => {
  if (error) {
    console.log(error);
  }
  res.send(data);
});
});

// add linkedin tip
router.post("/linkedintips/add", (req, res) => {
  let heading = req.body.heading;
  let description = req.body.description;
  let active = req.body.active;

  let newTip = new CDCLinkedInTips({heading, description, active}).save()

  res.send('Added Successfully');
});

//update linkedin tips
router.post("/linkedintips/update", (req, res) => {
  let heading = req.body.heading;
  let active = req.body.active;
  
  CDCLinkedInTips.findOneAndUpdate(
    { heading },
    { $set: { active }},
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      res.send(data);
    }
  );
});

 // get all interview ques
 router.get("/interviewques", (req, res) => {
  CDCInterviewQues.find({"active": true}, (error, data) => {
  if (error) {
    console.log(error);
  }
  res.send(data);
});
});

// add interview ques
router.post("/interviewques/add", (req, res) => {
  let category = req.body.category;
  let ques = req.body.ques;
  let active = req.body.active;

  let newTip = new CDCInterviewQues({category, ques, active}).save()

  res.send('Added Successfully');
});

//update interview ques
router.post("/interviewques/update", (req, res) => {
  let ques = req.body.ques;
  let active = req.body.active;
  
  CDCInterviewQues.findOneAndUpdate(
    { ques },
    { $set: { active }},
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      res.send(data);
    }
  );
});

 // get all contact info
 router.get("/contact", (req, res) => {
  CDCContactUs.find((error, data) => {
  if (error) {
    console.log(error);
  }
  res.send(data);
});
});

// add contact info
router.post("/contact/add", (req, res) => {
  let name = req.body.name;
  let mail = req.body.mail;

  let newTip = new CDCContactUs({name, mail}).save()

  res.send('Added Successfully');
});

//update contact info
router.post("/contact/update", (req, res) => {
  let name = req.body.name;
  let mail = req.body.mail;
  
  CDCContactUs.findOneAndUpdate(
    { name },
    { $set: { name, mail }},
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      res.send(data);
    }
  );
});

module.exports = router;
