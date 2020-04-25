const express = require('express')
const router = express.Router()

//adionando models para carregamento do db nas paginas
const HeaderNav = require('../models/HeaderNav')
const PagHome_slideshow = require('../models/PagHome_Slideshow')

router.get('/', (req, res) => {
    res.render('admin/dashboard', { layout: 'dashboard.handlebars' })
})
router.get('/edit-pages', (req, res) => {
    res.render('edit-admin/edit-pages', { layout: 'dashboard.handlebars' })
})


//adionando rota edit-nav
router.get('/edit-nav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('edit-admin/edit-nav', { layout: 'dashboard.handlebars', nav: nav })
    })
})

router.get('/edit-home', (req, res) => {
    PagHome_slideshow.findOne().then((slideshow) => {
        res.render('edit-admin/edit-home', { layout: 'dashboard.handlebars', slideshow: slideshow })
    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

module.exports = router