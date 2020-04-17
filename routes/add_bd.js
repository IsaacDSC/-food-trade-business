const express = require('express')
const router = express.Router()

//add models HeaderNav
const HeaderNav = require('../models/HeaderNav')

router.get('/', (req, res) => {
    HeaderNav.create({
        logotipo: 'images/logotipo.png',
        nav1: 'inicio',
        url_nav1: '/',
        nav2: 'Menu',
        url_nav2: '/menu',
        nav3: ''
    }).then(() => {
        res.send('Pagina Resetada Com Sucesso')
    }).catch((err) => {
        res.send('Error ao resetar: ' + err)
    })
})

module.exports = router