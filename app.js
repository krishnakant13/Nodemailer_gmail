var nodemailer = require('nodemailer');
require('dotenv').config()

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Art Of Success" <info.artofsuccess@gmail.com>', // sender address
   // to: 'github@gmail,baz@blurdybloop.com', // list of receivers
	to: 'khumbh13122000@gmail.com',// list of receivers
    subject: 'Test App NodeJs✔', // Subject line
    text: 'This is the mail regarding your request for reset_password', // plaintext body
    html: '<b>This is the mail regarding your request for reset_password</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});