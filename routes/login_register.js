const express = require('express')
const router = express.Router()
const passport = require('passport')
const Usuarios = require('../models/Usuarios')
const bcryptjs = require('bcryptjs')


const Email = require('../config/Email')

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
    const pwd = req.body.password
    const nome = req.body.nome
    const telefone = req.body.telefone
    if (nome.length <= 10) {
        req.flash('error_msg', 'Preencha seu nome completo')
        res.redirect('/usuario/register')
    }
    if (pwd.length <= 6) {
        req.flash('error_msg', 'Senha Muito Fraca')
        res.redirect('/usuario/register')
    }
    if (nome.length > 10 && pwd.length > 6) {
        bcryptjs.genSalt(10, (err, salt) => {
            bcryptjs.hash(req.body.password, salt, (err, hash) => {
                if (err) {
                    res.send("Erro ao Criptografar esta Senha " + err)
                } else {
                    const createConfirmatePwd = Math.random().toString(32).substr(2, 9)
                    Email.transporter.sendMail({
                        from: 'food trade business <food-trade-business@outlook.com>',
                        to: req.body.email,
                        subject: 'Código de Confirmação Burger',
                        text: '',
                        html: `<h1>Login Burger</h1><br><p>Seja Muito Bem Vindo a Melhor Hamburgueria do Brasil</p><br><a href="">Senha de Confirmação:  <strong>${createConfirmatePwd}</strong></a>`
                    }).then((message) => {
                        // req.flash('success_msg', req.body.email + ' Cadastrado com Sucesso!')
                        // res.redirect('/usuario/login')
                        console.log(message)
                        const pass = hash
                        Usuarios.create({
                            nome: req.body.nome,
                            email: req.body.email,
                            password: pass,
                            code: createConfirmatePwd
                        }).then(() => {
                            //res.send('Usuario cadastrado com sucesso')
                            req.flash('success_msg', 'Vamos Agora ao Próximo paso cadastrar seu endereço')
                            res.redirect('/usuario/login')
                        }).catch((err) => {
                            //error de enviar email
                            res.send('error de enviar email: ' + err)
                        })
                    }).catch((err) => {
                        //error de cadastro no banco de dados
                        res.send('error de cadastro no banco de dados:' + err)
                    })
                }
            })
        })
    }
})

router.get('/verification', (req, res) => {
    res.render('register/verification', { layout: 'login_register.handlebars' })
})
router.post('/verification', (req, res) => {
    const verification = req.body.verification
        //fazer uma busca do code cadastrado com o code enviado do email do user
    Usuarios.findOne({ where: { email: req.body.email } }).then((user) => {
        if (!user) {
            //res.send(user.statusConfirmated)
            req.flash('error_msg', 'Email de cadastro invalido verifique e tente novamente')
            res.redirect('/usuario/verification')
        }
        if (user) {
            //res.send(user.statusConfirmated + '<br>' + user.code + '<br>' + req.body.verification)
            //console.log('\n\n\n\n\n' + user.statusConfirmated + '\n' + user.code + '\n' + req.body.verification)
        }
        if (user.code == req.body.verification) {
            user.statusConfirmated = req.body.verification,
                user.save().then(() => {
                    res.send(`Olá ${user.nome}, você foi cadastrado com sucesso!`)
                }).catch((err) => {
                    res.send('Erro na senha de confirmação ' + err)
                })
        }



    })

})


module.exports = router