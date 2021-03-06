const express = require('express')
const router = express.Router()

const { restorePassword } = require('../../services/passwordRestore')

router.post('/restore', async (req, res) => {
  const data = await restorePassword(req.body)
  if (data.result) {
    return res.status(200).json(data)
  }
  return res.status(400).json(data)
})

module.exports = router
