import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  console.log('rota raiz do Users')
  res.json({ msg: 'Rota do Users' })
})

export default router
