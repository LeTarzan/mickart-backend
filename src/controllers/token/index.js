const express = require('express')
/* eslint-disable prettier/prettier */
const router = express.Router()

const { verifyToken, generateToken } = require('../../services')

router.post('/verify-token', async (req, res) => {
  console.log('token...', req.body.token)
  let result = await verifyToken(req.body.token)
  if (result) {
    return res.status(200).json({ result })
  }
  return res.status(400).json({ result })
})

router.post('/generate-token', async (req, res) => {
  const { id, username } = req.body
  let rs = await generateToken(id, username)
  if (rs.token) {
    return res.status(200).json({ rs })
  }
  return res.status(400).json({ rs })
})

module.exports = router
