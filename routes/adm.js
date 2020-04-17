const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('adm/admin', { layout: 'adm.handlebars' })
})

router.get('/login', (req, res) => {
    res.render('login/login', { layout: 'login.handlebars' })
})

module.exports = router