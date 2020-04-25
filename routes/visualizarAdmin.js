const express = require('express')
const router = express.Router()

//adionando models para carregar a pag visualizar
const HeaderNav = require('../models/HeaderNav')

router.get('/vis-headernav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('vis-admin/vis-headerNav', { layout: 'dashboard.handlebars', nav: nav })
    }).catch((err) => {
        res.send('Error ao Carregar models header nav na rota vis-headernav ' + err)
    })
})

module.exports = router