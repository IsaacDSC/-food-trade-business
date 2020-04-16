const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('cardapio/cardapio')
})

router.get('/edit', (req, res) => {
    res.render('cardapio/edit/editCardapio')
})
module.exports = router