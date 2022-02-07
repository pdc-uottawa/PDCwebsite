const nodemailer = require("nodemailer");
const utf8 = require("utf8");
require('dotenv').config()

const sendEmail = async (email_to_mail, email_to_name, project_name, applicant_email) => {

    // let params = {
    //     user_id: process.env.userID,
    //     service_id: process.env.serviceID,
    //     template_id: process.env.templateID,
    //     template_params: {
    //       'project_name': project_name,
    //       'email_to_name': email_to_name,
    //       'applicant_email': applicant_email,
    //       'email_to_address': email_to_mail
    //     }
    // };

    // let options = {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "Application/json"
    //     },
    //     body: JSON.stringify(params)
    // };

    // fetch(process.env.urlSend, options)
    // .then((httpResponse) => {
    //     if (httpResponse.ok) {
    //         console.log('Your mail is sent!');
    //     } else {
    //         return httpResponse.text()
    //           .then(text => Promise.reject(text));
    //     }
    // })
    // .catch((error) => {
    //     console.log('Oops... ' + error);
    // });

//     const subject = `Application Received for Project: ${project_name}`;
  
//   var emailText = `Hello ${email_to_name},

// We have received an application for Project: ${project_name}, Applied By: ${applicant_email}.
  
// Best wishes,
// PDC Website`;

//   const transporter = nodemailer.createTransport({
//     // service: "gmail",
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     tls:{
//         ciphers:'SSLv3'
//     },
//     auth: {
//       user: `${process.env.EMAIL_USER}`,
//       pass: `${process.env.EMAIL_USER_PASSWORD}`,
//     },
//   });

//   let mailOptions = {
//     from: `${process.env.EMAIL_USER}`,
//     to: email_to_mail,
//     subject: subject,
//     text: emailText,
//   };
 
//   transporter.sendMail(mailOptions, (error, response) => {
//         if (error) {
//           console.log(error);
//         }
//         console.log(response);
//       });
};

exports.sendEmail = sendEmail;