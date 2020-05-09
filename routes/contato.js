const express = require('express')
const router = express.Router()

//add models
const Headernav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const Contato = require('../models/Contato')

//adionando models para enviar para o banco de dados
const ContatoPost = require('../models/Contato_Post')

router.get('/', (req, res) => {
    Headernav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            Contato.findOne().then((contato) => {
                res.render('contato/contato', { nav: nav, footer: footer, contato: contato })
            })
        })
    })
})

router.post('/contatopost', (req, res) => {
    ContatoPost.create({
        nome: req.body.name,
        email: req.body.email,
        nota: req.body.nota,
        menssagem: req.body.message
    }).then(() => {
        req.flash('success_msg', 'Enviado com sucesso!')
        res.redirect('/contato')
    }).catch((err) => {
        req.flash('Erro ao enviar o formulário, por favor preencha corretamente o formulário!')
        res.redirect('/contato')
    })
})


module.exports = router