const express = require('express')
const router = express.Router()

//carregando models 
const HeaderNav = require('../models/HeaderNav')


router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.send('Pagina Sobre', { nav: nav })
    }).catch((err) => {
        res.send('Error ao carregar models headernav')
    })
})

module.exports = router