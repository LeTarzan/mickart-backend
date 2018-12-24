const express = require('express')
// eslint-disable-next-line prettier/prettier
const {
  getAllUsers,
  insertUser,
  updateUser,
  getUser,
  deleteUser,
  getUserProfile
} = require('../../services')

const router = express.Router()

router.get('/full/:id', async (req, res) => {
  try {
    console.log('rota raiz do Users')
    let result = await getUserProfile(req.params)
    res.json({ msg: 'Rota do Users', data: result })
  } catch (error) {
    console.log('error ..', error)
  }
})

router.get('/', async (req, res) => {
  try {
    console.log('rota raiz do Users')
    let result = await getAllUsers()
    res.json({ msg: 'Rota do Users', data: result })
  } catch (error) {
    console.log('error ..', error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    let result = await getUser(req.params)
    res.json({ msg: 'Rota do Users', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.post('/', async (req, res) => {
  console.log('req', req.body)
  try {
    let result = await insertUser(req.body)
    res.json({ msg: 'Rota do Users', data: result })
  } catch (error) {
    console.log('error ', error)
    if (error.code === '23505') {
      console.log('detail ..', error.detail)
      if (error.detail.match(/email/)) {
        return res.status(409).json({ msg: 'Email já cadastrados!' })
      }
      res.status(409).json({ msg: 'Username já cadastrados!' })
    }
  }
})

router.put('/', async (req, res) => {
  console.log('req', req.body)
  try {
    let result = await updateUser(req.body)
    res.json({ msg: 'Rota do Users', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let result = await deleteUser(req.params)
    res.json({ msg: 'Rota do Users', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

module.exports = router
