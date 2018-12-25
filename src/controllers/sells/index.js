/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
const express = require('express')
const router = express.Router()

const {
  getAllSells,
  getSell,
  insertSell,
  updateSell,
  deleteSell
} = require('../../services')

router.get('/', async (req, res) => {
  try {
    console.log('rota raiz do Sells')
    let result = await getAllSells()
    res.json({ msg: 'Rota de Sells', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    console.log('rota raiz do Sells')
    let result = await getSell(req.params)
    res.json({ msg: 'Rota de Sells', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.post('/', async (req, res) => {
  try {
    console.log('rota raiz do Sells')
    console.log('req.body ', req.body)
    let result = await insertSell(req.body)
    res.json({ msg: 'Rota de Sells', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.put('/', async (req, res) => {
  try {
    console.log('rota raiz v de Sells')
    let result = await updateSell(req.body)
    res.json({ msg: 'Rota de Sells', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    console.log('rota raiz de Sells')
    let result = await deleteSell(req.params)
    res.json({ msg: 'Rota de Sells', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

module.exports = router
