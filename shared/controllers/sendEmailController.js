const nodemailer = require("nodemailer");
const utf8 = require("utf8");

const sendEmail = (email_to_address, email_to_name, project_name, applicant_email) => {
    var subject = `Application Received for Project: ${project_name}`;
  var textTwo = `Hello ${email_to_name},

We have received an application for - ${project_name}, applied by ${applicant_email}.
            
Best wishes,
PDC WEBSITE.`;

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
    text: textTwo,
  };

  transporter.sendMail(mailOptionsTwo, (error, response) => {
    if (error) {
      console.log(error);
    }
    console.log(response);
  });
};
exports.sendEmail = sendEmail;
