/* eslint-disable prettier/prettier */

const {
    getAllList,
    getList,
    insertList,
    updateList,
    deleteList
} = require('../../services')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        console.log('rota raiz de list')
        let result = await getAllList()
        res.json({ msg: 'Rota de list', data: result})
    } catch (error) {
        console.log('error ', error)        
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log('rota raiz de list')
        let result = await getList(req.params)
        res.json({ msg: 'Rota de list', data: result})
    } catch (error) {
        console.log('error ', error)        
    }
})

router.post('/', async (req, res) => {
    try {
        console.log('rota raiz de list')
        let result = await insertList(req.body)
        res.json({ msg: 'Rota de list', data: result})
    } catch (error) {
        console.log('error ', error)        
    }
})

router.put('/', async (req, res) => {
    try {
        console.log('rota raiz de list')
        let result = await updateList(req.body)
        res.json({ msg: 'Rota de list', data: result})
    } catch (error) {
        console.log('error ', error)        
    }
})

router.delete('/:id', async (req, res) => {
    try {
        console.log('rota raiz de list')
        let result = await deleteList(req.params)
        res.json({ msg: 'Rota de list', data: result})
    } catch (error) {
        console.log('error ', error)        
    }
})

module.exports = router
