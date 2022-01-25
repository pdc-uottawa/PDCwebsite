const nodemailer = require("nodemailer");
const utf8 = require("utf8");
require('dotenv').config()

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_USER_PASSWORD = process.env.EMAIL_USER_PASSWORD; 

const sendEmail = (email_to_mail, email_to_name, project_name, applicant_email) => {

    const from_mail = 'PDC Website <uottawa.pdc@gmail.com>';
    const subject = `Application Received for Project: ${project_name}`;
  
  var emailText = `Hello ${email_to_name},

We have received an application for Project: ${project_name}, Applied By: ${applicant_email}.
  
Best wishes,
PDC Website`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_USER_PASSWORD,
    },
  });

  let mailOptions = {
    from: from_mail,
    to: email_to_mail,
    subject: subject,
    text: emailText,
  };
 
  transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
          console.log(error);
        }
        console.log(response);
      });
};

exports.sendEmail = sendEmail;