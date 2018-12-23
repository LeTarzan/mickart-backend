/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
const express = require('express')
const router = express.Router()

const {
    getAllSells,
    getSell,
    insertSell,
    updateSell,
    deleteSell,
    insertList,
    insertPayment
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

router.get('/:id', async(req, res) => {
    try {
        console.log('rota raiz do Sells')
        let result = await getSell(req.params)
        res.json({ msg: 'Rota de Sells', data: result})
    } catch (error) {
        console.log('error ', error)
    }
})

router.post('/', async (req, res) => {
    try {
        console.log('rota raiz do Sells')
        let result = {}

        let dados = req.body
        console.log('dados = ', dados)
        let { user_id } = dados.sell
        let sellAmount = await dados.list.reduce((prev, curr) => {
            console.log('prev', prev)
            console.log('curr', curr)
            return parseFloat(prev) + parseFloat(curr.amount * curr.qtd)
        }, 0)
        console.log('sellAmount ', sellAmount)
        let rsSellId = await insertSell({ amount: sellAmount, user_id })
        rsSellId = rsSellId[0]  

        dados.list.map(item => {
            item.sell_id = rsSellId
        });
        console.log('dadosList ', dados.list)
        let result_list = await insertList(dados.list)
        dados.payment.sell_id = rsSellId

        let result_payment = await insertPayment(dados.payment)
        console.log('resultado..', result_payment)

        result.result_list = result_list
        result.result_payment = result_payment

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
        res.json({ msg: 'Rota de Sells', data: result})
    } catch (error) {
        console.log('error ', error)
    }
})

module.exports = router

// modelo json para inserir sell
// {
// 	"sell": {
// 		"amount": 0.00,
// 		"user_id": 1,
// 		"date_delivery": "2018-12-22"
// 	},
// 	"list": [
// 		{
// 			"qtd": 2,
// 			"amount": 24.99,
// 			"product_id": 1
// 		}
// 	],
// 	"payment": [
// 		{
// 			"typePayment_id": 1
// 		}
// 	]
// }