const express = require('express')
const router = express.Router()

//adionando models para carregar a pag visualizar
const HeaderNav = require('../models/HeaderNav')
const History = require('../models/HistoryHome_models')

router.get('/vis-headernav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('vis-admin/vis-headerNav', { layout: 'dashboard.handlebars', nav: nav })
    }).catch((err) => {
        res.send('Error ao Carregar models header nav na rota vis-headernav ' + err)
    })
})

/*router.get('/vis-history', (req, res) => {
     res.send('ok')
 })*/
router.get('/vis-history', (req, res) => {
    History.findOne().then((hisHome) => {
        res.render('vis-admin/vis-history', { layout: 'dashboard.handlebars', hisHome: hisHome })
    }).catch((err) => {
        res.send('Error ao Carregar models header history na rota vis-history' + err)
    })
})

module.exports = router