const express = require('express')
/* eslint-disable prettier/prettier */
const router = express.Router()

const {
  getRole,
  getAllRole,
  insertRole,
  updateRole,
  deleteRole
} = require('../../services')

router.get('/', async (req, res) => {
  try {
    console.log('rota raiz do Role')
    let result = await getAllRole()
    res.json({ msg: 'Rota de Role', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    console.log('rota raiz do Role')
    let result = await getRole(req.params)
    res.json({ msg: 'Rota de Role', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.post('/', async (req, res) => {
  try {
    console.log('rota raiz do Role')
    let result = await insertRole(req.body)
    res.json({ msg: 'Rota de Role', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.put('/', async (req, res) => {
  try {
    console.log('rota raiz de Role')
    let result = await updateRole(req.body)
    res.json({ msg: 'Rota de Role', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    console.log('rota raiz de Role')
    let result = await deleteRole(req.params)
    res.json({ msg: 'Rota de Role', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

module.exports = router
