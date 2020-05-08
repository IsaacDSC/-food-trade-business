const express = require('express')
const router = express.Router()

//adionando models para carregar a pag visualizar
const HeaderNav = require('../models/HeaderNav')
const History = require('../models/HistoryHome_models')
const Footer = require('../models/Footer_models')
const Slideshow = require('../models/PagHome_Slideshow')

router.get('/vis-headernav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('vis-admin/vis-headerNav', { layout: 'dashboard.handlebars', nav: nav })
    }).catch((err) => {
        res.send('Error ao Carregar models header nav na rota vis-headernav ' + err)
    })
})

router.get('/vis-history', (req, res) => {
    History.findOne().then((hisHome) => {
        res.render('vis-admin/vis-history', { layout: 'dashboard.handlebars', hisHome: hisHome })
    }).catch((err) => {
        res.send('Error ao Carregar models header history na rota vis-history' + err)
    })
})

router.get('/vis-footer', (req, res) => {
    Footer.findOne().then((footer) => {
        res.render('vis-admin/vis-footer', { layout: 'dashboard.handlebars', footer: footer })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Footer do banco de dados
        req.flash('error_msg', 'EVFDB-1001')
        res.redirect('/visAdmin/vis-footer')
    })
})

router.get('/vis-slideshow', (req, res) => {
    Slideshow.findOne().then((slideshow) => {
        res.render('vis-admin/vis-slideshow', { layout: 'dashboard.handlebars', slideshow: slideshow })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Slideshow do banco de dados
        req.flash('error_msg', 'EVSDB-1010')
        res.redirect('/visAdmin/vis-slideshow')
    })
})




module.exports = router