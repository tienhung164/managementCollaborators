const nodemailer = require('nodemailer')
const GMAIL_USERNAME = process.env.GMAIL_USERNAME
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD


async function sendMail(_to,_subject,_text) {

  let transporter = nodemailer.createTransport({
    host: "mail.smtp.port",
    port: 587,
    secure: false, 
    auth: {
      user: GMAIL_USERNAME, 
      pass: GMAIL_PASSWORD, 
    },
  });


  let info = await transporter.sendMail({
    from: '"Pallgree Shop 👻" <foo@example.com>', // sender address
    to: _to, // list of receivers
    subject: _subject, // Subject line
    text: _text, // plain text body
  });
}

module.exports= {sendMail}