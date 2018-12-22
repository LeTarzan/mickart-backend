/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()

const {
    getAllPayment,
    getPayment,
    insertPayment,
    updatePayment,
    deletePayment
  } = require('../../services')

  router.get('/', async (req, res) => {
    try {
        console.log('rota raiz do Payment')
        let result = await getAllPayment()
        res.json({ msg: 'Rota de Payment', data: result })
    } catch (error) {
        console.log('error ', error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        console.log('rota raiz do Payment')
        let result = await getPayment(req.params)
        res.json({ msg: 'Rota de Payment', data: result})    
    } catch (error) {
        console.log('error ', error)        
    }
})

router.post('/', async (req, res) => {
    try {
        console.log('rota raiz do Payment')
        let result = await insertPayment(req.body)
        res.json({ msg: 'Rota de Payment', data: result })
    } catch (error) {
        console.log('error ', error)        
    }
})

router.put('/', async (req, res) => {
    try {
        console.log('rota raiz de Payment')
        let result = await updatePayment(req.body)
        res.json({ msg: 'Rota de Payment', data: result })
    } catch (error) {
        console.log('error ', error)        
    }
})

router.delete('/:id', async (req, res) => {
    try {
        console.log('rota raiz de Payment')
        let result = await deletePayment(req.params)
        res.json({ msg: 'Rota de Payment', data: result})    
    } catch (error) {
        console.log('error ', error)        
    }
})

module.exports = router