const nodemailer = require('nodemailer')

const sendEmail = async function (to, subject, text) {
  // dados de autenticação
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
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

  return transporter.sendMail(mailOptions).then(function (info) {
    console.log(info.response)
    return true
  }).catch(function (err) {
    console.log(err)
    return false
  })
}

exports.sendEmail = sendEmail
