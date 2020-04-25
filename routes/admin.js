const express = require('express')
const router = express.Router()

//adionando models para carregamento do db nas paginas
const HeaderNav = require('../models/HeaderNav')

router.get('/', (req, res) => {
    res.render('admin/dashboard', { layout: 'dashboard.handlebars' })
})
router.get('/edit-pages', (req, res) => {
    res.render('admin/edit-pages', { layout: 'dashboard.handlebars' })
})

router.get('/edit-nav', (req, res) => {
    HeaderNav.findOne().then((nav)=>{
        
        res.render('admin/edit-nav', { layout: 'dashboard.handlebars', nav: nav })
    })
})

router.get('/edit-home', (req, res) => {
    res.render('admin/edit-home', { layout: 'dashboard.handlebars' })
})

module.exports = router