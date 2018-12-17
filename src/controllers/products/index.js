/* eslint-disable prettier/prettier */
const express = require('express')
const getAllProducts = require('../../services')
const getProduct = require('../../services')
const insertProduct = require('../../services')
const updateProduct = require('../../services')
const deleteProduct = require('../../services')

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

router.post('/', async (req, res) => {
    try {
        let result = await insertProduct(req.body)
        res.json({ msg: 'Rota de products', data: result })
    } catch (error) {
        console.log('error', error)
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
