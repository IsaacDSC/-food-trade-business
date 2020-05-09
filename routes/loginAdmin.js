const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('login/loginAdmin', { layout: 'login_register.handlebars' })
})

module.exports = router