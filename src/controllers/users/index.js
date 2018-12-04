import express from 'express'
// eslint-disable-next-line prettier/prettier
import { getAllUsers, insertUser, updateUser, getUser, deleteUser } from '../../services/'
const router = express.Router()

router.get('/', async (req, res) => {
  console.log('rota raiz do Users')
  let result = await getAllUsers()
  res.json({ msg: 'Rota do Users', data: result })
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

export default router
