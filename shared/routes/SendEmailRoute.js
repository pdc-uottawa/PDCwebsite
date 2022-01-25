const router = require("express").Router();
const { sendEmail } = require('./../controllers/sendEmail')

router.post("/send", (req, res) => {
    sendEmail(
      req.body.emailToAddress,
      req.body.emailToName,
      req.body.emailForProject, 
      req.body.emailApplicant
    )
  });

module.exports = router;