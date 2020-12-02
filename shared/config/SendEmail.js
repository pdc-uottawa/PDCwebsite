const mailer = require("nodemailer");
require('dotenv').config()

const getEmailData = (to, name, subject, applicantEmail) => {
    let data = null;

            data = {
                from: "GES-PDC UOttawa <"+process.env.GMAIL_USERID+">",
                to:to,
                subject: subject,
                html: `Hi ${name},<br><br> We received application from ${applicantEmail}.<br><br> Regards, <br> GES-PDC UOttawa`
            }
    return data;
}


const sendEmail = (to, name, subject, applicantEmail) => {

    const smtpTransport = mailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USERID,
            pass: process.env.GMAIL_PASSWORD
        }
    })

    const mail = getEmailData(to, name, subject, applicantEmail)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })


}

module.exports = {sendEmail}

