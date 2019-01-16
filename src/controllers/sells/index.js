/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
const express = require('express')
const router = express.Router()
const { requireAuth } = require('../../services/auth')
const { getRole } = require('../../services/role')

const {
  getAllSells,
  getSell,
  insertSell,
  updateSell,
  deleteSell,
  getNextDateDeliveries
} = require('../../services')

router.get('/next-deliveries', async (req, res) => {
  try {
    console.log('rota raiz de Sell')
    let result = await getNextDateDeliveries()
    res.json({ msg: 'Rota de Sells', data: result })
  } catch (error) {
    console.log('error ...', error)
  }
})

router.get('/', requireAuth, async (req, res) => {
  try {
    console.log('rota raiz do Sells')
    let typeRole = getRole(req.id)
    let result
    if (typeRole === 1) {
      result = await getAllSells()
      return res.json({ msg: 'Rota de Sells', data: result })
    }
    result = await getSell(req.id)
    return res.json({ msg: 'Rota de Sells', data: result })
  } catch (error) {
    console.log('error ', error)
  }
})

router.get('/:id', requireAuth, async (req, res) => {
  try {
    console.log('rota raiz do Sells', req)
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
