const express = require('express')
/* eslint-disable prettier/prettier */
const router = express.Router()

const {
    getAllTypeOfPayment,
    getTypeOfPayment,
    insertTypeOfPayment,
    updateTypeOfPayment,
    deleteTypeOfPayment
} = require('../../services')

router.get('/', async (req, res) => {
    try {
        console.log('rota raiz do TypeOfPayment')
        let result = await getAllTypeOfPayment()
        res.json({ msg: 'Rota de TypeOfPayment', data: result })
    } catch (error) {
        console.log('error ', error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        console.log('rota raiz do TypeOfPayment')
        let result = await getTypeOfPayment(req.params)
        res.json({ msg: 'Rota de TypeOfPayment', data: result})
    } catch (error) {
        console.log('error ', error)
    }
})

router.post('/', async (req, res) => {
    try {
        console.log('rota raiz do TypeOfPayment')
        let result = await insertTypeOfPayment(req.body)
        res.json({ msg: 'Rota de TypeOfPayment', data: result })
    } catch (error) {
        console.log('error ', error)
    }
})

router.put('/', async (req, res) => {
    try {
        console.log('rota raiz de TypeOfPayment')
        let result = await updateTypeOfPayment(req.body)
        res.json({ msg: 'Rota de TypeOfPayment', data: result })
    } catch (error) {
        console.log('error ', error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        console.log('rota raiz de TypeOfPayment')
        let result = await deleteTypeOfPayment(req.params)
        res.json({ msg: 'Rota de TypeOfPayment', data: result})
    } catch (error) {
        console.log('error ', error)
    }
})

module.exports = router
