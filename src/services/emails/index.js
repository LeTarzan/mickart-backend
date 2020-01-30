const nodemailer = require('nodemailer')
require('dotenv').config()

const sendEmail = async function (to, subject, text) {
  // dados de autenticação
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  }

  return transporter.sendMail(mailOptions).then(function (info) {
    console.log(info.response)
    return true
  }).catch(function (err) {
    console.log(err)
    return false
  })
}

exports.sendEmail = sendEmail
