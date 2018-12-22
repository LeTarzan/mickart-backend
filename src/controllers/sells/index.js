/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
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
        let rs_sell_id = await insertSell(dados.sell)
         
        dados.list.forEach((item, index, dados) => {
            item.sell_id = rs_sell_id
        });
        
        let result_list = await insertList(dados.list)
        dados.payment.sell_id = rs_sell_id
        
        dados.list.forEach((item, index, dados) => {
            item.sell_id = rs_sell_id
        })
        
        dados.payment.typePayment_id = parseInt(dados.payment.typePayment_id)

        let result_payment = await insertPayment(dados.payment)

        let amount = 0

        dados.list.forEach((item, index, dados) => {
            amount += item.value
        })

        let result_update = await updateSell({ amount: amount })

        result.result_list = result_list
        result.result_payment = result_payment
        result.result_update = result_update

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