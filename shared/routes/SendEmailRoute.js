const router = require("express").Router();
// const {sendEmail} = require("../config/SendEmail");
const { sendEmail } = require("../controllers/sendEmailController");
const { queryEmailer } = require("../controllers/websiteQueryEmailer");

router.post("/send", (req, res) => {
  sendEmail(
    req.body.emailToAddress,
    req.body.emailToName,
    req.body.emailForProject,
    req.body.emailApplicant
  );
});

router.post("/query", (req, res) => {
  queryEmailer(
    req.body.email_to_address,
    req.body.email_to_name,
    req.body.query_category,
    req.body.first_name,
    req.body.last_name,
    req.body.query_message,
    req.body.query_email
  );
});

module.exports = router;
