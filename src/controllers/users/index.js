import express from 'express'
import { getAllUsers, insertUser } from '../../services/'
const router = express.Router()

router.get('/', async (req, res) => {
  console.log('rota raiz do Users')
  let result = await getAllUsers()
  res.json({ msg: 'Rota do Users', data: result })
})

router.post('/', async (req, res) => {
  console.log('req', req.body)
  try {
    let result = await insertUser(req.body)
    res.json({ msg: 'Rota do Users', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

export default router
