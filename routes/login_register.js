const express = require('express')
const router = express.Router()
const passport = require('passport')
const Usuarios = require('../models/Usuarios')

router.get('/login', (req, res) => {
    res.render('login/login', { layout: 'login_register.handlebars' })
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/menu',
        failureRedirect: '/usuario/login',
        failureFlash: true,
    })(req, res, next)
})

router.get('/register', (req, res) => {
    res.render('register/register', { layout: 'login_register.handlebars' })
})

router.post('/register', (req, res) => {
    const nome = req.body.nome
    const pwd = req.body.password
    if (nome.length <= 10) {
        req.flash('error_msg', 'Preencha seu nome completo')
        res.redirect('/usuario/register')
    }
    if (req.body.password != req.body.password_confirmation) {
        req.flash('error_msg', 'Senhas Não Batem')
        res.redirect('/usuario/register')
    }
    if (pwd.length <= 6) {
        req.flash('error_msg', 'Senha Muito Fraca')
        res.redirect('/usuario/register')
    } else {
        Usuarios.create({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
        }).then(() => {
            req.flash('success_msg', req.body.email + ' Cadastrado com Sucesso!')
            res.redirect('/usuario/login')
        }).catch((err) => {
            res.send(err)
        })
    }
})




module.exports = router