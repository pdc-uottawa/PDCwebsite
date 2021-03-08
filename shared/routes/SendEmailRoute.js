const router = require("express").Router();
const {sendEmail} = require("../config/SendEmail");

router.post("/send", (req, res) => {
    sendEmail(req.body.emailToAddress,req.body.emailToName,req.body.emailForProject, req.body.emailSubject,req.body.emailApplicant)
  });

module.exports = router;