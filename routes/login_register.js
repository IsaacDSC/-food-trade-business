const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/login', (req, res) => {
    res.render('login/login', { layout: 'login_register.handlebars' })
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/menu',
        failureRedirect: '/login',
        failureFlash: true,
    })(req, res, next)
})

router.post('/register', (req, res) => {
    res.render('register/register')
})


module.exports = router