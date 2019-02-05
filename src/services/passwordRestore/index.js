const { sendEmail } = require('../emails')
const { getUserByEmail, updateUserPassword } = require('../users')
const { encryptPassword } = require('../password')

const restorePassword = async (data) => {
  try {
    let dataUser = await getUserByEmail(data)
    dataUser = dataUser[0]
    if (dataUser) {
      let newPassword = await generatePassword()
      const newPasswordCrypt = await encryptPassword(newPassword)
      let text = 'Olá ' + dataUser.name + ' ' + dataUser.lastname + ', sua senha foi alterada, agora ela é: ' + newPassword + '.'
      let subject = 'Recuperação de senha - Mickarte'
      const result = await sendEmail(dataUser.email, subject, text)
      if (result) {
        let data = {}
        data.id = dataUser.id
        data.password = newPasswordCrypt
        let rs = await updateUserPassword(data)
        if (rs) {
          return { result: true, msg: 'Mensagem enviada, confira seu email!' }
        }
      }
      return { result: false, msg: 'Falha ao enviar email!' }
    }
    return { result: false, msg: 'Email não encontrado!' }
  } catch (error) {
    console.log('error restorePassword..', error)
    throw error
  }
}

const generatePassword = function () {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 8; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

exports.restorePassword = restorePassword
