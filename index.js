const express = require('express')
const app = express()
require('dotenv').config();
const nodemailer = require('nodemailer');
const port = 3000


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})
// Set up the transporter, which will be responsible for sending the email.

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });
//   the mailOptions object, which holds the details of where to send the email and with what data.
const mailOptions = {
    from:'athira.varma89@gmail.com',
    to: 'dr.aryajayavarma@gmail.com',
    subject: 'Hello from nodemailer',
    text: 'This is a test email sent using nodemailer.'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:');
      console.log(error.message);
    } else {
      console.log('Email sent successfully!');
      console.log('Response:', info);
    }
  });
  
  