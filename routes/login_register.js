const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login_register/login', { layout: 'login_register.handlebars' })
})

router.get('/register', (req, res) => {
    res.render('login_register/register', { layout: 'login_register.handlebars' })
})

module.exports = router