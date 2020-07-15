const express = require('express')
const router = express.Router()

router.get('/asd', (req, res) => {
    res.render('login_register/login', { layout: 'login_register.handlebars' })
})

router.get('/', (req, res) => {
    res.render('register/register', { layout: 'login_register.handlebars' })
})


module.exports = router