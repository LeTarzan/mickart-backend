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
    console.log('rota raiz do TypeOfPayment')
    let result = await getAllTypeOfPayment()
    res.json({ msg: 'Rota de TypeOfPayment', data: result })
})

router.get('/:id', async(req, res) => {
    console.log('rota raiz do TypeOfPayment')
    let result = await getTypeOfPayment(req.params)
    res.json({ msg: 'Rota de TypeOfPayment', data: result})    
})

router.post('/', async (req, res) => {
    console.log('rota raiz do TypeOfPayment')
    let result = await insertTypeOfPayment(req.body)
    res.json({ msg: 'Rota de TypeOfPayment', data: result })
})

router.put('/', async (req, res) => {
    console.log('rota raiz de TypeOfPayment')
    let result = await updateTypeOfPayment(req.body)
    res.json({ msg: 'Rota de TypeOfPayment', data: result })
})

router.delete('/:id', async (req, res) => {
    console.log('rota raiz de TypeOfPayment')
    let result = await deleteTypeOfPayment(req.params)
    res.json({ msg: 'Rota de TypeOfPayment', data: result})    
})

module.exports = router
