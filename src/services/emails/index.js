const nodemailer = require('nodemailer')

const sendEmail = function (to, subject, text) {
  // dados de autenticação
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'leandrorevolve@gmail.com',
      pass: 'Leandro24'
    }
  })

  let mailOptions = {
    from: 'leandrorevolve@gmail.com',
    to,
    subject,
    text
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('error sendEmail..', error)
      throw error
    } else {
      console.log('Email sent: ' + info.response)
      return true
    }
  })
}

exports.sendEmail = sendEmail
