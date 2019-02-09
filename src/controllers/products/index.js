/* eslint-disable prettier/prettier */

const {
  getAllProducts,
  getProduct,
  insertProduct,
  updateProduct,
  deleteProduct
} = require('../../services/products')

const { requireAuth } = require('../../services/auth')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    let result = await getAllProducts()
    res.json({ msg: 'Rota de products', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    let result = await getProduct(req.params)
    res.json({ msg: 'Rota do products', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.post('/', requireAuth, async (req, res) => {
  try {
    let result = await insertProduct(req.body)
    res.status(200).json(result)
  } catch (error) {
    console.log('error', error)
    return res.status(409).json(error)
  }
})

router.put('/', async (req, res) => {
  try {
    let result = await updateProduct(req.body)
    res.json({ msg: 'Rota de products', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let result = await deleteProduct(req.params)
    res.json({ msg: 'Rota de products', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

module.exports = router
