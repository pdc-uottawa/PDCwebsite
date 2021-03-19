const mailer = require("nodemailer");
require('dotenv').config()

const getEmailData = (to, name, project, subject, applicantEmail) => {
    let data = null;

            data = {
                from: "GES-PDC UOttawa <"+process.env.Outlook_Id+">",
                to:to,
                subject: subject,
                html: `Hi ${name},<br><br> We have received an application for <br><b>Project : ${project}</b><br><b>Applied by : ${applicantEmail}</b><br><br> Regards, <br> GES-PDC UOttawa`
            }
    return data;
}


const sendEmail = (to, name, project, subject, applicantEmail) => {

    const smtpTransport = mailer.createTransport({
        //service: "gmail",
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        tls:{
            ciphers:'SSLv3'
        },
        auth: {
            user:process.env.Outlook_Id,
            pass:process.env.Outlook_Password
        }
    })

    const mail = getEmailData(to, name, project, subject, applicantEmail)

    smtpTransport.verify(function(error1, info1){
        if(error1)
        {
            console.log("Settings Error:"+error1);
        }
        else
        {
            console.log("Server is ready to take messages");
        }
    })
    
    smtpTransport.sendMail(mail, function(error, info) {
        if(error) {
            console.log("This is the error:"+error);
        } else {
            console.log( "Message Sent:"+info.response);
        }
        smtpTransport.close();
    })


}

module.exports = {sendEmail}

