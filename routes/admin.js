const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('admin/dashboard', { layout: 'dashboard.handlebars' })
})

router.get('/edit-pages', (req, res) => {
    res.render('admin/editPages', { layout: 'dashboard.handlebars' })
})


module.exports = router