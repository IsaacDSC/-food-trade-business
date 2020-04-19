const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('admin/dashboard', { layout: 'dashboard.handlebars' })
})
router.get('/edit-pages', (req, res) => {
    res.render('admin/edit-pages', { layout: 'dashboard.handlebars' })
})

router.get('/edit-nav', (req, res) => {
    res.render('admin/edit-nav', { layout: 'dashboard.handlebars' })
})

router.get('/edit-home', (req, res) => {
    res.render('admin/edit-home', { layout: 'dashboard.handlebars' })
})

module.exports = router