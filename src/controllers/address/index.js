/* eslint-disable prettier/prettier */

const {
  getAddress,
  getAllAddress,
  insertAddress,
  updateAddress,
  deleteAddress
} = require('../../services')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    console.log('rota raiz de list')
    let result = await getAllAddress()
    res.json({ msg: 'Rota de list', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    console.log('rota raiz de list')
    let result = await getAddress(req.params)
    res.json({ msg: 'Rota de list', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.post('/', async (req, res) => {
  try {
    console.log('rota raiz de list')
    let result = await insertAddress(req.body)
    res.json({ msg: 'Rota de list', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.put('/', async (req, res) => {
  try {
    console.log('rota raiz de list')
    let result = await updateAddress(req.body)
    res.json({ msg: 'Rota de list', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    console.log('rota raiz de list')
    let result = await deleteAddress(req.params)
    res.json({ msg: 'Rota de list', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

module.exports = router
