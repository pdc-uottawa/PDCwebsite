const nodemailer = require("nodemailer");
const utf8 = require("utf8");

const queryEmailer = (email_to_address, email_to_name, query_category, first_name, last_name, query_message, query_email) => {
    var subject = `PDC Website | Query Received for ${query_category} Category.`;
  var emailText = `Hello ${email_to_name},

PFB a query received for ${query_category} category. PTC of the same.

First Name - ${first_name}
Last Name - ${last_name}
Email - ${query_email}
Message - ${query_message}

Best wishes,
PDC Website`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'uottawa.pdc@gmail.com',
      pass: 'jpdewadwdmfnqkoq',
    },
  });

  let mailOptionsTwo = {
    from: 'uottawa.pdc@gmail.com',
    to: email_to_address,
    subject: subject,
    text: emailText,
  };

  transporter.sendMail(mailOptionsTwo, (error, response) => {
    if (error) {
      console.log(error);
    }
    console.log(response);
  });
};
exports.queryEmailer = queryEmailer;
